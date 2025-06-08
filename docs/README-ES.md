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

[Sitio Web Oficial de Cute Panel](https://cutepanel.io)
•
[Documentación](https://cute-panel.gitbook.io/cute-panel/)
</div>

<br>

## ⚪ Bienvenido a Cute Panel

**Cute Panel** es un sistema autónomo de inteligencia artificial diseñado para gestionar e interactuar en redes sociales—comenzando por Twitter—con una mínima intervención humana. Puede publicar, responder, seguir conversaciones y manejar microtransacciones usando criptomonedas. A largo plazo, el objetivo es ampliar su soporte a más plataformas y mejorar la forma en que las cuentas automatizadas interactúan con comunidades reales.

El proyecto está desarrollado en **TypeScript** por su fiabilidad, tipado fuerte y compatibilidad con herramientas modernas.

<br>

<table>
<tr>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://twitter.com/cutepanel" title="Nuestro Twitter">
      <img src="https://img.shields.io/twitter/follow/cutepanel?style=social&label=Twitter" alt="Twitter" />
    </a><br>
    <small>Nuestro Twitter</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.io" title="Nuestro Sitio Web">
      <img src="https://img.shields.io/badge/Website-Visit%20Us-blue?style=flat-square&logo=internet-explorer" alt="Sitio Web" />
    </a><br>
    <small>Visita nuestro sitio</small>
  </td>
  <td align="center" width="200px" style="width:200px;">
    <a href="https://cute-panel.gitbook.io/cute-panel" title="Documentación">
      <img src="https://img.shields.io/badge/Docs-Read%20Here-green?style=flat-square&logo=read-the-docs" alt="Documentación" />
    </a><br>
    <small>Lee la documentación</small>
  </td>
</tr>
</table>

<br>

> **Dale estrella a Cute-Panel ⭐️**  
> Recibe notificaciones instantáneas sobre nuevas versiones y actualizaciones. ¡Tu apoyo nos ayuda a crecer!

<br>

## Descripción General

Cute Panel está diseñado como un agente autosuficiente con tres responsabilidades principales:

### 1. Automatización de Redes Sociales  
- Monitorea menciones, respuestas y DMs en Twitter  
- Publica tuits originales basados en lógica guiada por prompts  
- Responde con mensajes contextuales usando LLM (Claude)  
- Sigue hashtags y temas de interés (por ejemplo, $BTB)  
- Interactúa con usuarios mediante respuestas, likes e hilos  

### 2. Interacción con Criptomonedas  
- Crea y gestiona una billetera Ethereum  
- Envía propinas en cripto bajo reglas definidas  
- Usa `ethers.js` para interactuar con APIs blockchain  
- Registra historial de transacciones y datos del destinatario  
- Mantiene claves y datos sensibles encriptados y aislados  

> Aunque lanzamos junto al token $PANEL en Solana, la implementación actual es compatible con Ethereum y agnóstica de la plataforma.

### 3. Arquitectura Escalable  
- Soporta múltiples proveedores LLM y configuraciones de prompt  
- Fácilmente extensible a otras plataformas  
- Estructura modular ideal para contribuciones externas  
- Puede integrarse con múltiples cadenas y tokens  

---

<h2>Diagrama de Arquitectura</h2>

<div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <img src="https://i.imgur.com/g64Pbyp.png" alt="Architecture Diagram" style="width: 100%;">
  <br><br>
  <p><em>Este diagrama muestra el flujo de datos entre la puerta de enlace API, microservicios y la capa de base de datos.</em></p>
</div>

---

## Funcionalidades

- **Backend en TypeScript**  
  Construido con patrones modernos async, tipado estricto y soporte completo para el ecosistema npm.

- **Integración con LLM**  
  Utiliza la API de Claude para generar respuestas con seguimiento de contexto y prompts personalizados.

- **Gestión Segura de Claves**  
  - Toda información sensible está en variables de entorno  
  - Las claves privadas no se exponen en el código  
  - Encriptación básica y control de acceso implementados  

- **Flujo de Trabajo Basado en Eventos**  
  - Recolecta eventos de Twitter periódicamente  
  - Los procesa mediante un motor de decisiones  
  - Soporta reintentos, estrategias de backoff y manejo de límites  

- **Moderación y Seguridad**  
  - Filtros de prompt para evitar contenido inapropiado  
  - Lógica anti-spam básica  
  - Registro de actividad para auditoría y depuración  

---

## Estructura del Proyecto

```
src/
├── index.ts              # Punto de entrada
├── services/             # Módulos principales
│   ├── TwitterApi.ts     # Integración con Twitter
│   ├── LLMClient.ts      # Cliente del modelo de lenguaje
│   └── WalletManager.ts  # Gestión de billeteras y transacciones
└── types/                # Tipos compartidos
    └── index.ts
```

---

## Instalación

### Requisitos

- Node.js v16+  
- Credenciales de desarrollador de Twitter  
- API key de Claude  
- Nodo Ethereum (RPC endpoint)  
- Opcional: clave privada de billetera existente  

### Configuración

Crea un archivo `.env` con el siguiente contenido:

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

## Contribuir

Este proyecto está en constante desarrollo y está abierto a contribuciones. Si quieres ayudar a expandir a nuevas plataformas, mejorar los prompts o trabajar en la interfaz, puedes abrir un issue o PR. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para las directrices.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.
