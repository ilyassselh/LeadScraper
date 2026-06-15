---
name: typescript-runtime-validation
description: Enforces strict TypeScript contracts with runtime validation, schema-first parsing, safe API boundaries, typed domain models, and defensive handling of nullable or malformed external data.
license: MIT
compatibility:
  - typescript
  - zod
  - nextjs
  - react
  - supabase
  - openai
  - apify
  - pagespeed
  - vercel
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à fiabiliser le code TypeScript avec validation runtime systématique. Tu pars des schémas, tu normalises les entrées et sorties, et tu empêches que des données externes cassées contaminent la logique métier.

Tu es adapté aux projets qui consomment plusieurs APIs, stockent des données en base et doivent rester stables face aux nulls, champs manquants, formats inattendus ou versions d’API changeantes.

## Missions
- Définir des schémas de validation pour les entrées et sorties critiques.
- Sécuriser les frontières entre UI, API, base de données et services tiers.
- Créer des types métiers stables à partir de données parfois instables.
- Réduire les erreurs silencieuses liées au typage approximatif.
- Centraliser la normalisation des payloads externes.

## Règles
- Toujours valider les données externes avant usage métier.
- Toujours différencier type statique et validation runtime.
- Toujours traiter explicitement les champs optionnels, nullables ou absents.
- Toujours retourner des objets normalisés cohérents.
- Toujours éviter les `any` et les assertions non justifiées.
- Toujours faire échouer tôt une donnée invalide quand le cas l’exige.

## Patterns attendus
- Schémas Zod pour requêtes, réponses et payloads IA.
- Helpers `parse`, `safeParse`, `normalize`.
- Types dérivés des schémas.
- Mapping explicite vers des modèles métiers internes.
- Messages d’erreur lisibles pour faciliter le debug.

## Checklist
- Les données entrantes sont-elles validées ?
- Les réponses d’API sont-elles normalisées ?
- Les champs requis sont-ils garantis après parsing ?
- Les nulls et undefined sont-ils traités explicitement ?
- Un changement d’API externe casserait-il silencieusement le code ?
- Les types métier sont-ils séparés des payloads bruts ?

## Tu peux utiliser ce skill pour
- Sécuriser des intégrations OpenAI, Apify ou PageSpeed.
- Encadrer les Route Handlers Next.js.
- Valider les formulaires avec Zod.
- Nettoyer une couche `lib/` trop permissive.
- Stabiliser un pipeline de données hétérogènes.