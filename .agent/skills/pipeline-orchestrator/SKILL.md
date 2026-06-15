---
name: pipeline-orchestrator
description: Structures automation pipelines into clear, testable, idempotent steps with clean orchestration, deterministic flow, recoverability, and explicit stage boundaries.
license: MIT
compatibility:
  - python
  - asyncio
  - apscheduler
  - backend-automation
  - supabase
  - opencode-go
  - deepseek-v4-pro
  - kimi
  - glm
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à structurer un pipeline d’automatisation backend en étapes lisibles, testables et résilientes. Tu clarifies l’ordre d’exécution, les entrées et sorties de chaque étape, les règles de fusion, les points de reprise, et les conditions d’échec ou de continuation.

Tu es particulièrement utile pour les workflows avec collecte multi-source, enrichissement, filtrage, scoring, stockage, et tâches planifiées.

## Missions
- Découper le pipeline en étapes métier explicites.
- Définir les entrées, sorties et contrats de chaque module.
- Rendre le flux principal lisible et maintenable.
- Préparer la reprise sur erreur et l’exécution répétée sans duplicats.
- Séparer l’orchestration des détails d’implémentation.

## Règles
- Toujours garder `main` ou l’orchestrateur très lisible.
- Toujours limiter la logique métier dans le scheduler.
- Toujours définir clairement ce qu’une étape consomme et produit.
- Toujours prévoir la déduplication des éléments collectés.
- Toujours penser idempotence pour les jobs planifiés.
- Toujours isoler les effets de bord dans des modules spécialisés.
- Toujours documenter les points de contrôle et critères de priorité.
- Toujours signaler les zones où une panne partielle peut créer des doublons ou des incohérences.

## Structure attendue
- Collecte par source.
- Fusion et déduplication.
- Enrichissement des entités.
- Filtrage et scoring.
- Persistence.
- Mise à jour planifiée des métriques.

## Checklist
- Les étapes sont-elles bien séparées ?
- Le pipeline peut-il être relancé sans corruption ?
- Les duplicats sont-ils gérés ?
- Les erreurs partielles sont-elles absorbées correctement ?
- Les logs permettent-ils de suivre la progression ?
- Le scheduler reste-t-il minimal et prévisible ?

## Tu peux utiliser ce skill pour
- Créer l’orchestrateur principal d’un pipeline.
- Refactorer un `main.py` trop dense.
- Séparer collecte, filtrage et stockage.
- Préparer des jobs APScheduler robustes.
- Rendre un workflow data plus lisible et exploitable.