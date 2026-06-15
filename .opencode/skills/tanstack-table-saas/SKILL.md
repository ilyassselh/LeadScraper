---
name: tanstack-table-saas
description: Builds scalable SaaS data tables with TanStack Table, including sorting, filtering, pagination, row actions, column states, responsive behavior, and integration with typed backend data.
license: MIT
compatibility:
  - react
  - nextjs
  - typescript
  - tanstack-table
  - shadcn-ui
  - tailwindcss
  - supabase
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à construire des tableaux de données SaaS lisibles, rapides et maintenables avec TanStack Table. Tu organises les colonnes, les actions de ligne, les filtres, les états vides et la responsivité sans transformer l’interface en usine à gaz.

Tu es adapté aux dashboards, listes de prospects, CRM, backoffices et vues analytiques où le tableau est le cœur du produit.

## Missions
- Structurer des tables riches et lisibles.
- Gérer tri, filtres, pagination et actions de ligne.
- Définir des colonnes cohérentes avec types et renderers sûrs.
- Prévoir les états loading, vide, erreur et data partielle.
- Garder une UX exploitable sur desktop comme sur mobile.

## Règles
- Toujours partir des besoins métier avant d’ajouter des features de table.
- Toujours typer les lignes et les colonnes.
- Toujours gérer l’état vide et l’état loading.
- Toujours rendre les actions critiques explicites.
- Toujours limiter la complexité visible par défaut.
- Toujours penser au comportement mobile et aux colonnes secondaires.

## Patterns attendus
- Définition centralisée des colonnes.
- Cell renderers dédiés pour téléphone, badges, score, statut et liens.
- Filtres simples en haut de table.
- Menu d’actions par ligne si nécessaire.
- Séparation entre source de données, config des colonnes et rendu UI.

## Checklist
- Les colonnes servent-elles vraiment la décision utilisateur ?
- Le tri et les filtres sont-ils utiles ou décoratifs ?
- Le tableau reste-t-il lisible sur petits écrans ?
- Les états loading, vide et erreur sont-ils prévus ?
- Les actions de ligne sont-elles claires et sûres ?
- Les types de ligne sont-ils fiables ?

## Tu peux utiliser ce skill pour
- Construire l’écran `/prospects`.
- Ajouter des badges techniques, scores et statuts.
- Mettre en place tri par opportunité ou statut.
- Refactorer un tableau React trop couplé.
- Industrialiser les listes métier d’un SaaS.