<div align="center"> <a name="readme-top"></a>

![Cute-Panel-Banner](https://i.imgur.com/meFmf2U.png)


<br>

[![GitHub watchers](https://img.shields.io/github/watchers/KatriaDopex/Cute-Panel?style=social&label=Watch&color=ffffff&labelColor=ffffff)](https://GitHub.com/KatriaDopex/Cute-Panel/watchers)
[![GitHub forks](https://img.shields.io/github/forks/KatriaDopex/Cute-Panel?style=social&label=Fork&color=ffffff&labelColor=ffffff)](https://GitHub.com/KatriaDopex/Cute-Panel/network)
[![GitHub stars](https://img.shields.io/github/stars/KatriaDopex/Cute-Panel?style=social&label=Star&color=ffffff&labelColor=ffffff)](https://GitHub.com/KatriaDopex/Cute-Panel/stargazers)

[![Release](https://img.shields.io/github/v/release/KatriaDopex/Cute-Panel?style=flat-square&color=ffffff&labelColor=ffffff)](https://github.com/KatriaDopex/Cute-Panel/releases/latest)
[![Release Date](https://img.shields.io/github/release-date/KatriaDopex/Cute-Panel?style=flat-square&color=ffffff&labelColor=ffffff)](https://github.com/KatriaDopex/Cute-Panel/releases/latest)
[![License](https://img.shields.io/github/license/KatriaDopex/Cute-Panel?style=flat-square&color=0078d7&labelColor=ffffff)](https://github.com/KatriaDopex/Cute-Panel/blob/main/LICENSE)

<a href="https://github.com/katriadopex/cute-panel/blob/main/README.md"><img alt="README in English" src="https://img.shields.io/badge/English-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-CN.md"><img alt="简体中文操作指南" src="https://img.shields.io/badge/简体中文-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-JP.md"><img alt="日本語のREADME" src="https://img.shields.io/badge/日本語-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-KR.md"><img alt="README in 한국어" src="https://img.shields.io/badge/한국어-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-ES.md"><img alt="README en Español" src="https://img.shields.io/badge/Español-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-FR.md"><img alt="README en Français" src="https://img.shields.io/badge/Français-lightgrey"></a>
<a href="https://github.com/katriadopex/cute-panel/blob/main/docs/README-IT.md"><img alt="README in Italiano" src="https://img.shields.io/badge/Italiano-lightgrey"></a>

[Official Cute Panels Website](https://cutepanel.io)
•
[Documentation](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Welcome to Cute Panel

**Cute Panel** is an autonomous AI system designed to manage and interact on social media—starting with Twitter—with minimal human input. It can post, reply, track ongoing conversations, and handle microtransactions using cryptocurrency. The long-term aim is to expand support across platforms and improve how automated accounts engage with real communities.

The project is developed in **TypeScript** for its reliability, strong typing, and compatibility with modern tooling.

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="Our Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>Our Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="Our Website">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Website" />
    </a><br>
    <small>Our Website</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="Documentation">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Docs" />
    </a><br>
    <small>Documentation</small>
  </td>
</tr>
</table>


<br>

> \[!HOWDY]
>
> **Star Cute-Panel Repositories** ⭐️
>
> Get instant notifications for new releases and updates. Your support helps us scale and improve Cute-Panel!

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

<h2>Architecture Diagram</h2>


<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 80%;">
  <br><br>
  <p><em>This diagram illustrates the data flow between the API gateway, microservices, and the database layer.</em></p>
</div>


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
