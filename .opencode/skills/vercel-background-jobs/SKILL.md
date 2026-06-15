---
name: vercel-background-jobs
description: Designs lightweight background job patterns for Vercel-based applications using queues, polling, status persistence, idempotency, retry strategy, and safe orchestration of long-running workflows.
license: MIT
compatibility:
  - vercel
  - nextjs
  - serverless
  - supabase
  - cron
  - webhooks
  - background-jobs
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à concevoir des traitements asynchrones compatibles avec Vercel et les contraintes serverless. Tu structures les jobs longs avec persistance d’état, idempotence, reprise sur erreur, orchestration légère et suivi de progression.

Tu es adapté aux pipelines où une requête utilisateur déclenche plusieurs étapes lentes ou dépendantes comme scraping, audit technique, enrichissement ou génération IA.

## Missions
- Concevoir des workflows non bloquants sur infrastructure serverless.
- Persister les statuts de job et les transitions d’état.
- Gérer reprise, retry et idempotence.
- Découper les traitements longs en étapes sûres.
- Rendre observable la progression côté application.

## Règles
- Toujours éviter les traitements longs bloquants dans une seule requête.
- Toujours stocker l’état du job en base.
- Toujours rendre chaque étape idempotente.
- Toujours prévoir le comportement sur relance ou duplication.
- Toujours distinguer déclenchement, exécution et suivi.
- Toujours définir une stratégie de reprise sur erreur.

## Patterns attendus
- Table de jobs ou file légère en base.
- Statuts explicites `pending`, `running`, `done`, `failed`.
- Découpage par étape métier.
- Worker déclenché par cron, webhook, poll ou endpoint dédié.
- Logs structurés par `job_id` et `prospect_id`.

## Checklist
- Le job est-il relançable sans effet de bord ?
- L’état d’avancement est-il persistant ?
- Les étapes sont-elles découplées proprement ?
- Une erreur intermédiaire est-elle récupérable ?
- Le frontend peut-il suivre la progression ?
- Le modèle reste-t-il compatible avec Vercel Functions ?

## Tu peux utiliser ce skill pour
- Piloter scraping → audit → génération IA.
- Construire une file légère dans Supabase.
- Mettre en place des retries sur les audits échoués.
- Éviter les timeouts Vercel sur des traitements longs.
- Donner un suivi de progression à l’utilisateur.