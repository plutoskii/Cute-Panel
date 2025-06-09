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

[公式 Cute Panel ウェブサイト](https://cutepanel.io)
•
[ドキュメント](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Cute Panel へようこそ

**Cute Panel** は、最小限の人間の介入でソーシャルメディア（まずは Twitter）を管理・操作できる自律型 AI システムです。自動で投稿、返信、会話の追跡、さらには暗号通貨によるマイクロトランザクションを行います。将来的には複数のプラットフォームに対応し、自動アカウントとリアルなコミュニティとの関わり方を進化させることを目指します。

本プロジェクトは、堅牢な型システムとモダンな開発ツールとの親和性を備えた **TypeScript** で開発されています。

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="公式 Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>公式 Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="公式ウェブサイト">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Website" />
    </a><br>
    <small>公式サイト</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="ドキュメント">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Docs" />
    </a><br>
    <small>ドキュメント</small>
  </td>
</tr>
</table>

<br>

> **Cute Panel にスターをつけて ⭐️**
> 新機能やアップデートの通知を即座に受け取れます。あなたの応援が Cute Panel の成長につながります！

<br>

## 概要

Cute Panel は、次の3つの主要な機能を持つ自己完結型エージェントを目指して構築されています：

### 1. ソーシャルメディア自動化  
以下の機能を提供します：
- Twitter のメンション、リプライ、DM を監視  
- 指定されたプロンプトロジックに基づいてツイートを投稿  
- Claude LLM により文脈に合った返信を生成  
- トピックやハッシュタグ（例：$BTB）をトラッキング  
- ユーザーとリプライ、いいね、スレッドで積極的に交流  

### 2. 暗号通貨連携  
Bot は以下のブロックチェーン機能を提供します：
- Ethereum ウォレットの作成と管理  
- ルールに基づいた少額のチップ送金  
- `ethers.js` によるブロックチェーン API 連携  
- トランザクション履歴や受信者の記録  
- 鍵や機密データは安全に暗号化・分離保存  

> Solana 上の $PANEL トークンと同時展開中ですが、現在の実装は Ethereum ベースかつプラットフォームに依存しません。

### 3. 拡張可能なアーキテクチャ  
アーキテクチャは柔軟性とモジュール性を重視：
- 複数の LLM プロバイダーおよびプロンプト構成に対応  
- 他の SNS プラットフォームへ簡単に拡張可能  
- 外部貢献を歓迎する構造  
- マルチチェーン・マルチトークン統合に対応予定  

---

<h2>アーキテクチャ図</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>この図は、API ゲートウェイ、マイクロサービス、データベース層の間のデータフローを示しています。</em></p>
</div>

---

## 主な特徴

- **TypeScript バックエンド**  
  モダンな async パターンと型安全性、npm との完全な互換性

- **LLM 統合**  
  Claude API により自然な文章生成、文脈追跡とプロンプトカスタマイズに対応

- **安全な鍵管理**  
  - 機密情報はすべて環境変数経由で管理  
  - 秘密鍵はコードに露出しません  
  - 暗号化とアクセス制御を実装済み  

- **イベント駆動型ワークフロー**  
  - 一定間隔で Twitter イベントをポーリング  
  - 各イベントを意思決定エンジンで処理  
  - リトライ、バックオフ戦略、レート制限制御を実装  

- **セーフティ & モデレーション**  
  - 不適切な出力を防止するためのプロンプト・レスポンスフィルタ  
  - スパム対策ロジック  
  - デバッグと透明性のためのアクティビティログ  

---

## プロジェクト構成

```
src/
├── index.ts              # エントリーポイント
├── services/             # コアロジックモジュール
│   ├── TwitterApi.ts     # Twitter API 連携
│   ├── LLMClient.ts      # 言語モデルクライアント
│   └── WalletManager.ts  # ウォレット & 取引処理
└── types/                # 共有型定義
    └── index.ts
```

---

## セットアップ手順

### 必要条件

- Node.js v16+  
- Twitter API 認証情報  
- Claude API キー  
- Ethereum 互換の RPC エンドポイント  
- 任意：既存のウォレット秘密鍵  

### 設定

以下の内容で `.env` ファイルを作成：

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

## コントリビュート方法

このプロジェクトは開発中であり、コントリビューションを歓迎しています。もし新しいプラットフォーム対応、プロンプト最適化、UI ツールの強化に興味があれば、Issue または PR をご提出ください。詳細は [CONTRIBUTING.md](CONTRIBUTING.md) をご参照ください。

---

## ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。詳細は [LICENSE](LICENSE) をご確認ください。
