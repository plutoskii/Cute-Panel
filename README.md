<div align="center"> <a name="readme-top"></a>

![CutePanel Banner][cutepanel-banner]

[![TEN Releases]( https://img.shields.io/github/v/release/ten-framework/ten-framework?color=369eff&labelColor=gray&logo=github&style=flat-square )](https://github.com/TEN-framework/ten-framework/releases)
[![](https://img.shields.io/github/release-date/ten-framework/ten-framework?labelColor=gray&style=flat-square)](https://github.com/TEN-framework/ten-framework/releases)
[![Discussion posts](https://img.shields.io/github/discussions/TEN-framework/ten_framework?labelColor=gray&color=%20%23f79009)](https://github.com/TEN-framework/ten-framework/discussions/)
[![Commits](https://img.shields.io/github/commit-activity/m/TEN-framework/ten_framework?labelColor=gray&color=pink)](https://github.com/TEN-framework/ten-framework/graphs/commit-activity)
[![Issues closed](https://img.shields.io/github/issues-search?query=repo%3ATEN-framework%2Ften-framework%20is%3Aclosed&label=issues%20closed&labelColor=gray&color=green)](https://github.com/TEN-framework/ten-framework/issues)
[![](https://img.shields.io/github/contributors/ten-framework/ten-framework?color=c4f042&labelColor=gray&style=flat-square)](https://github.com/TEN-framework/ten-framework/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome!-brightgreen.svg?style=flat-square)](https://github.com/TEN-framework/ten-framework/pulls)
[![GitHub license](https://img.shields.io/badge/License-Apache_2.0_with_certain_conditions-blue.svg?labelColor=%20%23155EEF&color=%20%23528bff)](https://github.com/TEN-framework/ten_framework/blob/main/LICENSE)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/TEN-framework/TEN-framework)

[![GitHub watchers](https://img.shields.io/github/watchers/TEN-framework/ten_framework?style=social&label=Watch)](https://GitHub.com/TEN-framework/ten_framework/watchers/?WT.mc_id=academic-105485-koreyst)
[![GitHub forks](https://img.shields.io/github/forks/TEN-framework/ten_framework?style=social&label=Fork)](https://GitHub.com/TEN-framework/ten_framework/network/?WT.mc_id=academic-105485-koreyst)
[![GitHub stars](https://img.shields.io/github/stars/TEN-framework/ten_framework?style=social&label=Star)](https://GitHub.com/TEN-framework/ten_framework/stargazers/?WT.mc_id=academic-105485-koreyst)

<a href="https://github.com/TEN-framework/ten-framework/blob/main/README.md"><img alt="README in English" src="https://img.shields.io/badge/English-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-CN.md"><img alt="简体中文操作指南" src="https://img.shields.io/badge/简体中文-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-JP.md"><img alt="日本語のREADME" src="https://img.shields.io/badge/日本語-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-KR.md"><img alt="README in 한국어" src="https://img.shields.io/badge/한국어-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-ES.md"><img alt="README en Español" src="https://img.shields.io/badge/Español-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-FR.md"><img alt="README en Français" src="https://img.shields.io/badge/Français-lightgrey"></a>
<a href="https://github.com/TEN-framework/ten-framework/blob/main/docs/README-IT.md"><img alt="README in Italiano" src="https://img.shields.io/badge/Italiano-lightgrey"></a>

[Official Cute Panels Website](https://cutepanel.io)
•
[Documentation](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Welcome to Cute Panel

**Cute Panel** is an autonomous AI system designed to manage and interact on social media—starting with Twitter—with minimal human input. It can post, reply, track ongoing conversations, and handle microtransactions using cryptocurrency. The long-term aim is to expand support across platforms and improve how automated accounts engage with real communities.

The project is developed in **TypeScript** for its reliability, strong typing, and compatibility with modern tooling.

<br>

| Community Channel | Purpose |
| ---------------- | ------- |
| [![Follow on X](https://img.shields.io/twitter/follow/TenFramework?logo=X&color=%20%23f5f5f5)](https://twitter.com/intent/follow?screen_name=TenFramework) | Follow TEN Framework on X for updates and announcements |
| [![Follow on LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-TEN_Framework-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/company/ten-framework) | Follow TEN Framework on LinkedIn for updates and announcements |
| [![Discord TEN Community](https://dcbadge.vercel.app/api/server/VnPftUzAMJ?&style=flat&theme=light&color=lightgray)](https://discord.gg/VnPftUzAMJ) | Join our Discord community to connect with developers |
| [![Hugging Face Space](https://img.shields.io/badge/Hugging%20Face-TEN%20Framework-yellow?style=flat&logo=huggingface)](https://huggingface.co/TEN-framework) | Join our Hugging Face community to explore our spaces and models |
| [![WeChat](https://img.shields.io/badge/TEN_Framework-WeChat_Group-%2307C160?logo=wechat&labelColor=darkgreen&color=gray)](https://github.com/TEN-framework/ten-agent/discussions/170) | Join our WeChat group for Chinese community discussions |

<br>

> \[!IMPORTANT]
>
> **Star Cute-Panel Repositories** ⭐️
>
> Get instant notifications for new releases and updates. Your support helps us grow and improve TEN!

<br>

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
