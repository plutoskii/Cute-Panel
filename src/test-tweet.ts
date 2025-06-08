import { config } from 'dotenv';
import { TwitterService } from './services/TwitterService';
import { ClaudeService } from './services/ClaudeService';
import { KnowledgeBaseService } from './services/KnowledgeBaseService';
import { loadConfig } from './config/config';
import { logger } from './utils/logger';
import * as path from 'path';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleRateLimit(resetTimestamp: number): Promise<void> {
  const currentTime = Date.now();
  const resetDate = new Date(resetTimestamp * 1000);
  const timeToWait = Math.max(0, resetDate.getTime() - currentTime);

  if (timeToWait > 0 && timeToWait < 900000) { // wait only if under 15 minutes
    logger.info(`Pausing due to rate limit until ${resetDate.toISOString()} (${Math.ceil(timeToWait / 1000)} seconds)`);
    await delay(timeToWait);
  } else {
    throw new Error('Rate limit reset time exceeds acceptable waiting period');
  }
}

async function runBot() {
  // Initialize environment variables and config
  config();
  const appConfig = loadConfig();

  // Setup API clients
  const twitterClient = new TwitterService(
    appConfig.twitter.apiKey,
    appConfig.twitter.apiSecret,
    appConfig.twitter.accessToken,
    appConfig.twitter.accessTokenSecret,
    appConfig.twitter.bearerToken,
  );

  const languageModel = new ClaudeService(appConfig.llm.apiKey);
  const knowledgeBase = new KnowledgeBaseService(
    path.join(__dirname, '../knowledge_base/custom_info.txt') // changed filename
  );

  try {
    // Target tweet to respond to
    const targetTweetId = '1876120727234937208';
    let tweetData = null;
    let attemptCount = 3;

    while (attemptCount > 0 && !tweetData) {
      try {
        tweetData = await twitterClient.getTweetById(targetTweetId);
      } catch (err: any) {
        if (err?.rateLimit?.reset) {
          try {
            await handleRateLimit(err.rateLimit.reset);
            continue;
          } catch (rateLimitErr) {
            logger.error('Exceeded maximum rate limit wait, will retry later');
            attemptCount--;
          }
        } else if (typeof err.message === 'string' && err.message.includes('Rate limit')) {
          logger.info('Hit rate limit without reset time, sleeping for 15 seconds...');
          await delay(15000);
          attemptCount--;
        } else {
          throw err;
        }
      }
    }

    if (!tweetData) {
      logger.error('Unable to retrieve tweet after multiple attempts');
      return;
    }

    logger.info('Fetched tweet text:', { text: tweetData.text });

    // Clean the tweet text to isolate the question
    const userQuestion = tweetData.text.replace(/\$CUSTOMTAG/gi, '').replace(/@\w+/g, '').trim();

    // Search knowledge base for relevant information
    const relevantInfo = await knowledgeBase.searchKnowledge(userQuestion);

    // Craft prompt for language model
    const promptText = `Answer this question regarding Custom Finance: "${userQuestion}"

Based on the following knowledge base excerpts:
${relevantInfo}

Respond concisely within 280 characters to suit a tweet.`;

    // Get response from Claude with retries
    let lmResponse = null;
    attemptCount = 3;

    while (attemptCount > 0 && !lmResponse) {
      try {
        lmResponse = await languageModel.getResponse(promptText);
        if (lmResponse.length > 280) {
          lmResponse = lmResponse.slice(0, 277) + '...';
        }
      } catch (err) {
        logger.error('Error obtaining response from language model:', err instanceof Error ? err.message : 'Unknown');
        await delay(5000);
        attemptCount--;
      }
    }

    if (!lmResponse) {
      logger.error('Failed to get a valid response from language model after retries');
      return;
    }

    logger.info('Generated response:', { response: lmResponse, length: lmResponse.length });

    // Attempt to reply to the tweet, with rate limit handling
    attemptCount = 3;
    while (attemptCount > 0) {
      try {
        await twitterClient.replyToTweet(lmResponse, tweetData.id);
        logger.info('Reply posted successfully');
        break;
      } catch (err: any) {
        if (err?.rateLimit?.reset) {
          try {
            await handleRateLimit(err.rateLimit.reset);
            continue;
          } catch {
            logger.error('Rate limit wait too long, retrying later');
            attemptCount--;
          }
        } else if (typeof err.message === 'string' && err.message.includes('Rate limit')) {
          logger.info('Encountered rate limit, waiting 15 seconds before retry');
          await delay(15000);
          attemptCount--;
        } else {
          throw err;
        }
      }
    }
  } catch (fatalErr) {
    logger.error('Fatal error in bot operation:', fatalErr instanceof Error ? fatalErr.message : 'Unknown error');
    throw fatalErr;
  }
}

runBot().catch((fatalError) => {
  logger.error('Unrecoverable error:', fatalError instanceof Error ? fatalError.message : 'Unknown error');
  process.exit(1);
});
