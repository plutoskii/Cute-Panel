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

[Site officiel de Cute Panel](https://cutepanel.io)
•
[Documentation](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Bienvenue dans Cute Panel

**Cute Panel** est un système autonome d'intelligence artificielle conçu pour gérer et interagir sur les réseaux sociaux—en commençant par Twitter—avec un minimum d’intervention humaine. Il peut publier, répondre, suivre des conversations en cours, et gérer des microtransactions en cryptomonnaie. L’objectif à long terme est d’étendre la prise en charge à d’autres plateformes et d’améliorer la manière dont les comptes automatisés interagissent avec les communautés réelles.

Le projet est développé en **TypeScript** pour sa fiabilité, son typage fort et sa compatibilité avec les outils modernes.

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="Notre Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>Notre Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="Notre site Web">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Site Web" />
    </a><br>
    <small>Visitez notre site</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="Documentation">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Docs" />
    </a><br>
    <small>Lisez la documentation</small>
  </td>
</tr>
</table>

<br>

> **Mettez une étoile sur Cute-Panel ⭐️**  
> Recevez des notifications instantanées pour les nouvelles versions et mises à jour. Votre soutien nous aide à évoluer !

<br>

## Vue d'ensemble

Cute Panel est conçu comme un agent autonome avec trois responsabilités principales :

### 1. Automatisation des réseaux sociaux  
- Surveille les mentions, réponses et messages privés Twitter  
- Publie des tweets originaux basés sur une logique guidée par des prompts  
- Répond avec des messages contextuels via un LLM intégré (Claude)  
- Suit des hashtags et sujets d’intérêt (ex : $BTB)  
- Interagit avec les utilisateurs via réponses, likes et fils de discussion  

### 2. Interaction avec la cryptomonnaie  
- Crée et gère un portefeuille Ethereum  
- Envoie de petits pourboires en cryptomonnaie selon des règles définies  
- Utilise `ethers.js` pour interagir avec les APIs blockchain  
- Enregistre l’historique des transactions et les données des destinataires  
- Garde les clés et données sensibles chiffrées et isolées  

> Bien que nous lancions avec le token $PANEL sur Solana, l’implémentation actuelle est basée sur Ethereum et agnostique à la plateforme.

### 3. Architecture évolutive  
- Supporte plusieurs fournisseurs de LLM et configurations de prompts  
- Facilement extensible à d’autres plateformes  
- Conçu pour des contributions externes et un développement modulaire  
- Peut s’intégrer avec plusieurs chaînes et types de tokens  

---

<h2>Diagramme d’architecture</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>Ce diagramme illustre le flux de données entre la passerelle API, les microservices et la couche base de données.</em></p>
</div>

---

## Fonctionnalités

- **Backend TypeScript**  
  Construit avec des patterns async modernes, typage strict, et accès complet à l’écosystème npm.

- **Intégration LLM**  
  Utilise l’API Claude pour la génération de messages, avec suivi de contexte et personnalisation des prompts.

- **Gestion sécurisée des clés**  
  - Toutes les informations sensibles sont stockées via des variables d’environnement  
  - Les clés privées ne sont jamais exposées dans le code  
  - Chiffrement basique et contrôle d’accès inclus  

- **Flux de travail événementiel**  
  - Polling des nouveaux événements Twitter à intervalle régulier  
  - Traitement via un moteur de décision  
  - Gestion des retries, stratégies de backoff, et limites d’appel  

- **Sécurité et modération**  
  - Filtres de prompt et contrôles de réponses pour éviter les contenus inappropriés  
  - Logique anti-spam de base  
  - Journalisation des activités pour transparence et débogage  

---

## Structure du projet

```
src/
├── index.ts              # Point d’entrée
├── services/             # Modules principaux
│   ├── TwitterApi.ts     # Intégration Twitter
│   ├── LLMClient.ts      # Client modèle de langage
│   └── WalletManager.ts  # Gestion portefeuille et transactions
└── types/                # Types TypeScript partagés
    └── index.ts
```

---

## Installation

### Prérequis

- Node.js v16+  
- Identifiants développeur Twitter  
- Clé API Claude  
- Endpoint RPC compatible Ethereum  
- Optionnel : clé privée portefeuille existante  

### Configuration

Créez un fichier `.env` avec le contenu suivant :

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

Ce projet est en développement actif et ouvert aux contributions. Si vous souhaitez aider à étendre la prise en charge des plateformes, améliorer les prompts, ou travailler sur l’interface utilisateur, n’hésitez pas à ouvrir un issue ou une pull request. Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour les directives.

---

## Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.
