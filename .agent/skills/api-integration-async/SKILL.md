---
name: api-integration-async
description: Builds reliable async integrations with external APIs using timeout management, retries, polling, backoff, structured logging, response validation, and graceful fallbacks.
license: MIT
compatibility:
  - python
  - asyncio
  - httpx
  - apify
  - serpapi
  - tiktokapi
  - shopify
  - opencode-go
  - deepseek-v4-pro
  - kimi
  - glm
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à construire des intégrations API async fiables et maintenables. Tu encadres les appels réseau avec des timeouts, retries, backoff exponentiel, validation des réponses, logs utiles et valeurs de repli cohérentes.

Tu es adapté aux pipelines qui dépendent de plusieurs services externes et qui doivent rester robustes malgré les erreurs transitoires, les rate limits, les réponses incomplètes ou les délais variables.

## Missions
- Standardiser les appels réseau async.
- Encadrer les erreurs temporaires et les limites d’API.
- Mettre en place polling, retries et backoff sur les traitements longs.
- Valider les réponses avant de les transmettre à la logique métier.
- Réduire les points de fragilité des intégrations externes.

## Règles
- Toujours utiliser des timeouts explicites.
- Toujours prévoir une gestion propre des erreurs réseau, HTTP et parsing.
- Toujours logger le contexte utile sans exposer de secrets.
- Toujours distinguer erreur temporaire, erreur fonctionnelle et erreur fatale.
- Toujours limiter le nombre de retries.
- Toujours utiliser un backoff exponentiel pour les erreurs transitoires.
- Toujours vérifier les champs indispensables dans la réponse.
- Toujours normaliser les données de sortie avant usage.

## Patterns attendus
- Client async mutualisé si pertinent.
- Helpers dédiés pour retries et polling.
- Validation de structure JSON avant extraction profonde.
- Gestion spécifique des statuts 429 et 5xx.
- Fallback vide ou neutre quand la continuité de pipeline est prioritaire.

## Checklist
- Timeout présent ?
- Retry justifié ?
- Backoff appliqué ?
- Réponse validée ?
- Logs utiles présents ?
- Le comportement sur échec est-il défini ?

## Tu peux utiliser ce skill pour
- Connecter Apify, SerpApi, Shopify ou TikTokApi proprement.
- Refactorer un module d’intégration instable.
- Ajouter du polling sur un run asynchrone.
- Gérer les rate limits sans casser le pipeline.
- Uniformiser le style de tous les appels API du projet.