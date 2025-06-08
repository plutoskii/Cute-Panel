import { TwitterService } from './TwitterService';
import { ClaudeService } from './ClaudeService';
import { KnowledgeBaseService } from './KnowledgeBaseService';
import { logger } from '../utils/logger';
import { Tweet, RateLimit } from '../types';

export class CutePanelTweetHandler {
  private twitter: TwitterService;
  private claude: ClaudeService;
  private knowledgeBase: KnowledgeBaseService;
  private lastTweetId?: string;
  private processing = false;
  private nextPoll: Date = new Date();
  private pollIntervalMs = 60000;

  constructor(
    twitterService: TwitterService,
    claudeService: ClaudeService,
    knowledgeBaseService: KnowledgeBaseService
  ) {
    this.twitter = twitterService;
    this.claude = claudeService;
    this.knowledgeBase = knowledgeBaseService;
  }

  private cleanTweetText(text: string): string {
    return text
      .replace(/\$btb/gi, '')
      .replace(/@\w+/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .trim();
  }

  private updatePollingTime(rateLimit?: RateLimit): void {
    if (rateLimit?.remaining === 0 && rateLimit.reset) {
      // Add 1 second buffer to reset time
      this.nextPoll = new Date(rateLimit.reset * 1000 + 1000);
      logger.info('Rate limit reached, scheduling next poll at', this.nextPoll.toISOString());
    } else {
      this.nextPoll = new Date(Date.now() + this.pollIntervalMs);
    }
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async handleBTBTweets(): Promise<void> {
    if (this.processing) {
      logger.info('Already processing tweets — skipping this cycle');
      return;
    }

    this.processing = true;
    try {
      logger.info('Fetching $BTB mentions...', { lastTweetId: this.lastTweetId });

      const { mentions, rateLimit } = await this.twitter.getMentionsWithRateLimit(this.lastTweetId);
      this.updatePollingTime(rateLimit);

      const filteredTweets = mentions.filter(tweet =>
        tweet.text.toLowerCase().includes('$btb')
      );

      logger.info(`Found ${filteredTweets.length} $BTB tweets to process`);

      for (const tweet of filteredTweets) {
        if (this.lastTweetId && tweet.id <= this.lastTweetId) continue;

        try {
          const question = this.cleanTweetText(tweet.text);
          if (!question) {
            logger.info('No valid question found — skipping tweet', { tweetId: tweet.id });
            continue;
          }

          const context = await this.knowledgeBase.searchKnowledge(question);
          const aiResponse = await this.claude.getResponse(context);
          const reply = this.truncateForTwitter(aiResponse);

          await this.twitter.replyToTweet(reply, tweet.id);
          logger.info('Replied successfully', { tweetId: tweet.id });

          this.lastTweetId = tweet.id;

          await this.wait(1000); // small pause to avoid hitting rate limits
        } catch (err) {
          logger.error('Error processing tweet', { tweetId: tweet.id, error: err });
        }
      }
    } catch (err) {
      logger.error('Error fetching or processing tweets', err);
      if ((err as any)?.rateLimit) {
        this.updatePollingTime((err as any).rateLimit);
      }
    } finally {
      this.processing = false;
    }
  }

  private truncateForTwitter(text: string): string {
    const maxLen = 280;
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen - 3) + '...';
  }

  async start(intervalMs = 300000): Promise<void> {
    this.pollIntervalMs = intervalMs;
    logger.info('Starting $BTB tweet handler', { intervalMs });

    await this.handleBTBTweets();

    while (true) {
      try {
        const now = Date.now();
        const delay = Math.max(0, this.nextPoll.getTime() - now);

        if (delay > 0) {
          logger.info('Waiting before next poll', { delayMs: delay, nextPoll: this.nextPoll.toISOString() });
          await this.wait(delay);
        }

        await this.handleBTBTweets();
      } catch (error) {
        logger.error('Error in polling loop', error);
        await this.wait(this.pollIntervalMs);
      }
    }
  }
}
