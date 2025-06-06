# Cute Panel

**Cute Panel** is an autonomous AI system designed to manage and interact on social media—starting with Twitter—with minimal human input. It can post, reply, track ongoing conversations, and handle microtransactions using cryptocurrency. The long-term aim is to expand support across platforms and improve how automated accounts engage with real communities.

The project is developed in **TypeScript** for its reliability, strong typing, and compatibility with modern tooling.

## Overview

Cute Panel is built to act as a self-sufficient agent with three main responsibilities:

### 1. Social Media Automation  
The agent can:
- Monitor Twitter mentions, replies, and DMs  
- Post original tweets based on prompt-driven logic  
- Reply with context-aware responses using an integrated LLM (Claude)  
- Track hashtags and topics of interest (e.g., $BTB)  
- Engage with users through replies, likes, and threads  

### 2. Cryptocurrency Interaction  
The bot supports basic on-chain actions:
- Creates and manages an Ethereum wallet  
- Sends small crypto tips under defined rules  
- Interfaces with blockchain APIs via `ethers.js`  
- Logs transaction history and recipient data  
- Keeps keys and sensitive data encrypted and isolated  

> While we're launching this alongside the $PANEL token on Solana, the current implementation is Ethereum-based and platform-agnostic.

### 3. Scalable Architecture  
The codebase is structured for adaptability:
- Supports multiple LLM providers and prompt configurations  
- Easily extendable to additional platforms  
- Designed for external contributions and modular development  
- Can integrate with multiple chains and token types

---

## Features

- **TypeScript Backend**  
  Built with modern async patterns, type safety, and full access to the npm ecosystem.

- **LLM Integration**  
  Utilizes Claude API to handle message generation, with support for context tracking and prompt customization.

- **Secure Key Management**  
  - All sensitive information is stored via environment variables  
  - Private keys are never exposed in the codebase  
  - Basic encryption and access control included  

- **Event-Driven Workflow**  
  - Polls for new Twitter events on an interval  
  - Processes each item through a decision engine  
  - Implements retries, backoff strategies, and rate-limit handling  

- **Safety & Moderation**  
  - Prompt filters and response checks to avoid inappropriate output  
  - Basic anti-spam logic  
  - Activity logging for transparency and debugging

---

## Project Structure

```
src/
├── index.ts              # Entry point
├── services/             # Core logic modules
│   ├── TwitterApi.ts     # Twitter integration
│   ├── LLMClient.ts      # Language model integration
│   └── WalletManager.ts  # Wallet and transaction handling
└── types/                # Shared TypeScript types
    └── index.ts
```

---

## Setup

### Requirements

- Node.js v16+  
- Twitter Developer credentials  
- Claude API key  
- Ethereum-compatible RPC endpoint  
- Optional: Existing wallet private key

### Configuration

Create a `.env` file with the following:

```
TWITTER_API_KEY=
TWITTER_API_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

CLAUDE_API_KEY=

WALLET_PRIVATE_KEY=
ETH_RPC_URL=
```

---

## Contribution

We're actively developing this project and open to contributions. If you're interested in helping with platform expansion, better language strategies, or UI tooling, feel free to open an issue or PR. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
