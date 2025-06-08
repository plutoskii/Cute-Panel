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

[공식 Cute Panel 웹사이트](https://cutepanel.io)
•
[문서 보기](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Cute Panel에 오신 것을 환영합니다

**Cute Panel**은 사람의 개입을 최소화하여 소셜 미디어 계정(우선 Twitter)을 자동으로 운영하고 상호작용하는 자율형 AI 시스템입니다. 자동 게시, 회신, 대화 추적, 암호화폐 기반 마이크로 트랜잭션까지 가능합니다. 다양한 플랫폼에 확장될 예정이며, 자동 계정이 커뮤니티와 교류하는 방식을 진화시키는 것이 목표입니다.

이 프로젝트는 강력한 타입 시스템과 현대적인 개발 환경을 제공하는 **TypeScript**로 작성되었습니다.

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="공식 트위터">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>공식 트위터</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="공식 웹사이트">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Website" />
    </a><br>
    <small>공식 웹사이트</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="문서 페이지">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Docs" />
    </a><br>
    <small>문서 보기</small>
  </td>
</tr>
</table>

<br>

> **Cute Panel에 스타 ⭐️를 눌러주세요!**  
> 새 기능이나 업데이트를 가장 먼저 받아볼 수 있습니다. 여러분의 응원이 프로젝트의 성장에 큰 힘이 됩니다.

<br>

## 개요

Cute Panel은 다음 세 가지 주요 기능을 중심으로 구축된 완전 자율형 에이전트입니다:

### 1. 소셜 미디어 자동화  
- Twitter 멘션, 리플, DM 감지  
- 설정한 프롬프트 논리에 따라 자동 트윗  
- Claude LLM을 통한 상황 맞춤형 회신 생성  
- 특정 토픽, 해시태그($BTB 등) 추적  
- 좋아요, 스레드, 답글 등으로 유저와 상호작용  

### 2. 암호화폐 연동  
- Ethereum 지갑 생성 및 관리  
- 규칙 기반 마이크로 지불 시스템  
- `ethers.js`를 통한 블록체인 API 연동  
- 트랜잭션 이력 기록 및 수신자 추적  
- 민감한 키는 안전하게 암호화 및 분리 저장  

> Solana 기반 $PANEL 토큰과 병행 개발 중이나, 현재 구현은 Ethereum 기반으로 플랫폼에 독립적입니다.

### 3. 확장 가능한 아키텍처  
- 다양한 LLM 제공자 및 프롬프트 설정 지원  
- 추가 SNS 플랫폼 통합 용이  
- 외부 기여자가 쉽게 참여할 수 있는 구조  
- 다중 체인 및 토큰 연동 예정  

---

<h2>아키텍처 다이어그램</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>API 게이트웨이, 마이크로서비스, 데이터베이스 계층 간의 흐름을 보여줍니다.</em></p>
</div>

---

## 주요 특징

- **TypeScript 백엔드**  
  비동기 구조, 타입 안정성, npm 생태계 완전 호환

- **LLM 통합**  
  Claude API를 활용해 자연스러운 언어 처리 및 컨텍스트 기반 응답

- **보안 키 관리**  
  - 민감 정보는 환경 변수로 분리  
  - 비밀 키는 코드에 노출되지 않음  
  - 암호화 및 액세스 제어 구현  

- **이벤트 기반 자동화**  
  - 주기적으로 Twitter 이벤트 수집  
  - 이벤트 발생 시 의사결정 로직 실행  
  - 재시도, 백오프, 속도 제한 처리 포함  

- **콘텐츠 안전성 및 필터링**  
  - 부적절한 응답 방지를 위한 필터링 및 검열  
  - 스팸 방지 로직  
  - 로깅 및 투명성 보장  

---

## 프로젝트 구조

```
src/
├── index.ts              # 진입점
├── services/             # 주요 로직 모듈
│   ├── TwitterApi.ts     # Twitter API 연동
│   ├── LLMClient.ts      # 언어 모델 통합
│   └── WalletManager.ts  # 지갑 및 트랜잭션 처리
└── types/                # 타입 정의
    └── index.ts
```

---

## 설치 및 실행

### 필요 사항

- Node.js v16 이상  
- Twitter API 키  
- Claude API 키  
- Ethereum RPC URL  
- 선택: 기존 지갑 비밀 키  

### 환경 변수 설정

`.env` 파일에 다음 정보 입력:

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

## 기여하기

Cute Panel은 현재 개발 중이며, 외부 기여를 환영합니다. 새로운 플랫폼 지원, 프롬프트 최적화, 프론트엔드 툴킷 개선 등에 관심이 있다면 Issue 또는 PR을 통해 기여해주세요. 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md) 문서를 참고하세요.

---

## 라이선스

본 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인하세요.
