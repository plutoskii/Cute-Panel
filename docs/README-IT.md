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

[Sito ufficiale di Cute Panel](https://cutepanel.io)
•
[Documentazione](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Benvenuti in Cute Panel

**Cute Panel** è un sistema AI autonomo progettato per gestire e interagire sui social media — iniziando da Twitter — con un intervento umano minimo. Può pubblicare, rispondere, monitorare conversazioni in corso e gestire microtransazioni tramite criptovaluta. L’obiettivo a lungo termine è espandere il supporto a più piattaforme e migliorare il modo in cui gli account automatizzati interagiscono con le comunità reali.

Il progetto è sviluppato in **TypeScript** per la sua affidabilità, tipizzazione forte e compatibilità con strumenti moderni.

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="Il nostro Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>Il nostro Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="Il nostro sito web">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Sito Web" />
    </a><br>
    <small>Visita il nostro sito</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="Documentazione">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Docs" />
    </a><br>
    <small>Leggi la documentazione</small>
  </td>
</tr>
</table>

<br>

> **Metti una stella ai repository Cute-Panel ⭐️**  
> Ricevi notifiche istantanee per nuovi rilasci e aggiornamenti. Il tuo supporto ci aiuta a crescere!

<br>

## Panoramica

Cute Panel è progettato per agire come un agente autosufficiente con tre responsabilità principali:

### 1. Automazione dei social media  
- Monitora menzioni, risposte e DM su Twitter  
- Pubblica tweet originali basati su logiche guidate da prompt  
- Risponde con messaggi contestuali utilizzando un LLM integrato (Claude)  
- Tiene traccia di hashtag e argomenti di interesse (es. $BTB)  
- Interagisce con gli utenti tramite risposte, like e thread  

### 2. Interazione con criptovalute  
- Crea e gestisce un wallet Ethereum  
- Invia piccoli tips in criptovaluta secondo regole definite  
- Interagisce con API blockchain tramite `ethers.js`  
- Registra la cronologia delle transazioni e dati dei destinatari  
- Mantiene le chiavi e dati sensibili criptati e isolati  

> Sebbene lanciamo questo insieme al token $PANEL su Solana, l’implementazione attuale è basata su Ethereum ed è agnostica alla piattaforma.

### 3. Architettura scalabile  
- Supporta molteplici provider di LLM e configurazioni di prompt  
- Facile da estendere ad altre piattaforme  
- Progettato per contributi esterni e sviluppo modulare  
- Può integrarsi con molteplici chain e tipi di token  

---

<h2>Diagramma dell’architettura</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>Questo diagramma illustra il flusso dati tra API gateway, microservizi e il livello database.</em></p>
</div>

---

## Funzionalità

- **Backend TypeScript**  
  Costruito con pattern async moderni, tipizzazione forte e pieno accesso all’ecosistema npm.

- **Integrazione LLM**  
  Usa l’API Claude per generare messaggi, con supporto per tracking del contesto e personalizzazione dei prompt.

- **Gestione sicura delle chiavi**  
  - Tutte le informazioni sensibili sono archiviate tramite variabili d’ambiente  
  - Le chiavi private non sono mai esposte nel codice  
  - Include crittografia base e controllo accessi  

- **Workflow basato su eventi**  
  - Polling di nuovi eventi Twitter a intervalli regolari  
  - Ogni evento viene elaborato tramite un motore decisionale  
  - Gestione di retry, strategie di backoff e limiti di chiamata  

- **Sicurezza e moderazione**  
  - Filtri per prompt e controlli per evitare output inappropriati  
  - Logica anti-spam di base  
  - Logging attività per trasparenza e debugging  

---

## Struttura del progetto

```
src/
├── index.ts              # Punto di ingresso
├── services/             # Moduli core
│   ├── TwitterApi.ts     # Integrazione Twitter
│   ├── LLMClient.ts      # Integrazione modello linguistico
│   └── WalletManager.ts  # Gestione wallet e transazioni
└── types/                # Tipi TypeScript condivisi
    └── index.ts
```

---

## Setup

### Requisiti

- Node.js v16+  
- Credenziali sviluppatore Twitter  
- Chiave API Claude  
- Endpoint RPC compatibile Ethereum  
- Opzionale: chiave privata wallet esistente  

### Configurazione

Crea un file `.env` con il seguente contenuto:

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

## Contribuire

Stiamo sviluppando attivamente questo progetto e accettiamo contributi. Se vuoi aiutare ad espandere le piattaforme supportate, migliorare le strategie di linguaggio o lavorare su strumenti UI, apri pure una issue o una pull request. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) per le linee guida.

---

## Licenza

Questo progetto è concesso in licenza sotto la MIT License. Vedi [LICENSE](LICENSE) per i dettagli.
