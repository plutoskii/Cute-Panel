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

[官方 Cute Panel 网站](https://cutepanel.io)
•
[项目文档](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ 欢迎来到 Cute Panel

**Cute Panel** 是一个自主的 AI 系统，旨在以最少的人为干预管理和互动社交媒体 —— 初期目标是 Twitter。它可以自动发帖、回复、跟踪对话，并通过加密货币进行小额交易。我们的长期目标是扩展到更多平台，并提升自动化账号与真实社区的互动质量。

项目使用 **TypeScript** 开发，因其可靠性、强类型以及对现代工具链的良好支持。

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="我们的 Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>我们的 Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="我们的官网">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="官网" />
    </a><br>
    <small>官方网站</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="文档">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="文档" />
    </a><br>
    <small>使用文档</small>
  </td>
</tr>
</table>

<br>

> **为 Cute Panel 点亮 Star ⭐️**
> 关注我们以接收最新更新和发布通知。你的支持是我们持续优化 Cute Panel 的动力！

<br>

## 项目概览

Cute Panel 致力于构建一个自给自足的智能代理系统，主要承担以下三个职责：

### 1. 社交媒体自动化  
该代理可实现：
- 监控 Twitter 的提及、回复和私信  
- 基于提示逻辑发布原创推文  
- 利用集成的语言模型（Claude）生成上下文相关的回复  
- 跟踪感兴趣的话题和标签（如 $BTB）  
- 通过回复、点赞、发推等方式与用户互动

### 2. 加密货币交互  
Bot 支持基础的链上操作：
- 创建并管理以太坊钱包  
- 按照设定规则发送小额加密货币打赏  
- 使用 `ethers.js` 接入区块链 API  
- 记录交易历史和收款人数据  
- 保持密钥和敏感信息加密隔离  

> 虽然我们与 Solana 上的 $PANEL 代币同步上线，目前实现基于以太坊，具有平台无关性。

### 3. 可扩展架构  
代码结构便于扩展与维护：
- 支持多种 LLM 提供商和提示配置  
- 可轻松拓展到其他平台  
- 模块化开发，欢迎外部贡献  
- 可集成多链和多种代币类型

---

<h2>架构图</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>此图展示了 API 网关、微服务与数据库层之间的数据流。</em></p>
</div>

---

## 功能亮点

- **TypeScript 后端开发**  
  使用现代异步模式、强类型系统，兼容全 npm 生态。

- **集成大语言模型（LLM）**  
  使用 Claude API 实现消息生成，支持上下文追踪和提示定制。

- **安全的密钥管理**  
  - 所有敏感信息均通过环境变量配置  
  - 私钥绝不会暴露在代码中  
  - 支持基础加密与访问控制  

- **事件驱动的工作流**  
  - 定时轮询 Twitter 新事件  
  - 通过决策引擎处理每个事件  
  - 实现重试、退避策略和速率限制控制  

- **内容安全与审查机制**  
  - 提示过滤和响应校验，避免生成不当内容  
  - 简易反垃圾机制  
  - 活动日志便于调试与透明化追踪  

---

## 项目结构

```
src/
├── index.ts              # 入口文件
├── services/             # 核心业务模块
│   ├── TwitterApi.ts     # Twitter 接口集成
│   ├── LLMClient.ts      # 语言模型集成
│   └── WalletManager.ts  # 钱包与交易处理
└── types/                # TypeScript 类型定义
    └── index.ts
```

---

## 安装与配置

### 环境要求

- Node.js v16+  
- Twitter 开发者账号及密钥  
- Claude API 密钥  
- 兼容以太坊的 RPC 节点地址  
- 可选：已有钱包私钥  

### 配置文件

创建 `.env` 文件，填入以下内容：

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

## 贡献指南

我们正在积极开发该项目，并欢迎社区贡献。如果你希望协助平台扩展、优化提示策略或 UI 工具开发，欢迎提交 Issue 或 Pull Request。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 许可证

本项目采用 MIT 协议授权。详情请见 [LICENSE](LICENSE)。
