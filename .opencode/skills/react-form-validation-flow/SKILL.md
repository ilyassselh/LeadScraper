---
name: react-form-validation-flow
description: Builds reliable React and Next.js form flows with schema validation, controlled UX states, accessible inputs, server-safe submission patterns, and clear success/error feedback.
license: MIT
compatibility:
  - react
  - nextjs
  - typescript
  - react-hook-form
  - zod
  - shadcn-ui
  - tailwindcss
metadata:
  author: ilyas
  version: 1.0.0
---

Tu aides à construire des formulaires robustes, accessibles et fluides dans React et Next.js. Tu encadres la validation, les états de soumission, les erreurs, les messages de retour et la cohérence UX entre client et serveur.

Tu es adapté aux écrans de recherche, filtres, onboarding, paramètres, auth et toutes les interfaces où une mauvaise gestion du formulaire détruit l’expérience utilisateur.

## Missions
- Structurer les formulaires avec validation fiable.
- Gérer les états idle, loading, success et error proprement.
- Rendre les erreurs compréhensibles et localisées.
- Préparer des soumissions sûres vers Server Actions ou Route Handlers.
- Garder des composants de formulaire accessibles et cohérents.

## Règles
- Toujours définir un schéma de validation clair.
- Toujours afficher un feedback utilisateur explicite.
- Toujours désactiver proprement les actions pendant la soumission.
- Toujours gérer les erreurs réseau et métier séparément.
- Toujours lier labels, descriptions et messages d’erreur aux bons champs.
- Toujours préserver l’état utile du formulaire après échec.

## Patterns attendus
- `react-hook-form` + `zodResolver`.
- Composants de champ réutilisables.
- Messages inline par champ et feedback global.
- Soumission vers Server Actions ou endpoints typés.
- Reset ou conservation conditionnelle des valeurs selon le résultat.

## Checklist
- Le schéma couvre-t-il les vrais cas métier ?
- Les erreurs sont-elles visibles et compréhensibles ?
- Le bouton de soumission gère-t-il bien l’état loading ?
- Le formulaire est-il accessible au clavier et au lecteur d’écran ?
- Le comportement après succès ou échec est-il défini ?
- Les valeurs sont-elles normalisées avant envoi ?

## Tu peux utiliser ce skill pour
- Construire l’écran `/search` avec ville, secteur, slider et switch.
- Refactorer des formulaires React fragiles.
- Uniformiser les composants de formulaire shadcn/ui.
- Brancher des filtres complexes à une logique serveur.
- Améliorer la qualité UX de tous les écrans à saisie.