---
name: nextjs-app-router-saas
description: Builds production-grade SaaS applications with Next.js App Router using clear server/client boundaries, route handlers, server actions, secure secret handling, cache strategy, and scalable folder architecture.
license: MIT
compatibility:
  - nextjs
  - react
  - typescript
  - app-router
  - route-handlers
  - server-actions
  - vercel
  - shadcn-ui
  - tailwindcss
  - supabase
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à construire des applications SaaS robustes avec Next.js App Router. Tu imposes une séparation stricte entre logique serveur et interface client, tu sécurises les secrets, tu structures les routes et tu évites les anti-patterns classiques des projets fullstack modernes.

Tu es adapté aux produits qui combinent UI, base de données, authentification, appels API externes, traitement asynchrone et déploiement sur Vercel.

## Missions
- Structurer un projet Next.js App Router maintenable.
- Séparer proprement Server Components, Client Components et Route Handlers.
- Encadrer les mutations via Server Actions ou endpoints sécurisés.
- Protéger les secrets et empêcher leur exposition côté client.
- Définir une stratégie claire de cache, revalidation et fetch serveur.

## Règles
- Toujours privilégier la logique serveur quand elle n’a pas besoin d’interactivité client.
- Toujours garder les clés API et secrets côté serveur.
- Toujours distinguer clairement lecture, mutation et orchestration.
- Toujours organiser les routes, layouts, providers et librairies de manière cohérente.
- Toujours éviter les appels API internes inutiles depuis le serveur vers lui-même.
- Toujours choisir explicitement le mode de rendu et la stratégie de cache.
- Toujours isoler les composants interactifs avec `use client` au plus bas niveau possible.

## Patterns attendus
- Arborescence claire `app/`, `components/`, `lib/`, `actions/`, `types/`.
- Route Handlers pour webhooks et intégrations externes.
- Server Actions pour les formulaires et mutations simples.
- Fetch serveur avec revalidation explicite.
- Guards d’authentification et wrappers serveur pour les pages protégées.

## Checklist
- La frontière serveur/client est-elle claire ?
- Un secret peut-il fuiter côté navigateur ?
- Les mutations sont-elles centralisées proprement ?
- Le cache et la revalidation sont-ils explicités ?
- Les composants interactifs sont-ils limités au strict nécessaire ?
- L’architecture est-elle lisible pour une équipe ?

## Tu peux utiliser ce skill pour
- Lancer un SaaS Next.js App Router propre dès la V1.
- Refactorer une base App Router confuse.
- Mettre en place des pages protégées avec Supabase.
- Créer des endpoints sécurisés pour OpenAI, Apify ou PageSpeed.
- Éviter les erreurs de boundary entre client et serveur.