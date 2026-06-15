# MEMORY.md — LeadScraper AI

## Conventions & Règles issues de l'Étape 1

### R1 — Tailwind CSS v4 : configuration CSS, pas JS
- **Constat :** Next.js 16 est livré avec Tailwind CSS v4 qui utilise `@import "tailwindcss" dans `globals.css` et `@theme inline {}` pour les variables de thème.
- **Règle :** Ne pas créer de `tailwind.config.ts`. Toute la config se fait dans le CSS via `@theme`. Le `postcss.config.mjs` contient uniquement le plugin `@tailwindcss/postcss`.

### R2 — Supabase côté serveur : `SUPABASE_SERVICE_ROLE_KEY` uniquement côté serveur
- **Constat :** Pour l'Étape 1, le client Supabase est purement serveur (API Routes, Server Components). On utilise `createClient` de `@supabase/supabase-js` avec `SUPABASE_SERVICE_ROLE_KEY`.
- **Règle :** `NEXT_PUBLIC_SUPABASE_ANON_KEY` est un préfixe public (exposé au client via `NEXT_PUBLIC_`). `SUPABASE_SERVICE_ROLE_KEY` est privé, jamais exposé. Pas de `use client` dans un fichier important `SUPABASE_SERVICE_ROLE_KEY`.

### R3 — `.env.example` doit survivre au `.gitignore`
- **Erreur rencontrée :** Le `.gitignore` généré contient `.env*` qui capture aussi `.env.example`.
- **Solution :** Ajout de `!.env.example` après la règle `.env*`.
- **Règle pour le futur :** Toujours vérifier que `.env.example` est trackable après avoir configuré le `.gitignore`.

### R4 — ESLint flat config (Next.js 16)
- **Constat :** Next.js 16 utilise la config ESLint plate (`eslint.config.mjs`) avec `defineConfig` et `globalIgnores`.
- **Règle :** Ne pas créer d'ancien `.eslintrc.json`. Tout passe par `eslint.config.mjs`.

### R5 — Turbopack par défaut
- **Constat :** `next dev` utilise Turbopack par défaut dans Next.js 16. Pas de fichier `next.config.js` pour activer Turbopack.
- **Règle :** Compatible avec la stack imposée. Pas d'action nécessaire.

### R6 — Structure de projet pour l'Étape 1
- `lib/supabase/server.ts` — client Supabase serveur
- `lib/env.ts` — validation des variables d'environnement
- `types/database.ts` — types TypeScript pour les tables
- `supabase/migrations/` — scripts SQL versionnés
- `app/api/health/route.ts` — endpoint de santé
- **Règle :** Garder cette structure plate et claire. Pas de sur-engineering.

---

## Conventions & Règles issues de l'Étape 2

### R7 — Route groups `(app)` pour le layout applicatif
- **Constat :** Le root layout `app/layout.tsx` ne doit contenir que `<html>` et `<body>`. Le layout avec sidebar doit être dans un route group `app/(app)/layout.tsx` pour que toutes les pages applicatives partagent la sidebar sans polluer le root layout.
- **Règle :** Root layout = pur boilerplate HTML. Layout applicatif = sidebar + `<main>`. Les pages sont dans `app/(app)/`.

### R8 — Thème sombre : `@theme` dans `globals.css` (Tailwind v4)
- **Constat :** Tailwind v4 permet de définir des couleurs customs via `@theme { --color-xxx: ... }`. Elles deviennent automatiquement des utilitaires (`bg-surface`, `text-accent`, `border-border`…).
- **Palette définie :** surface / surface-elevated / surface-hover / border / accent (ambre F59E0B) / text-primary / text-secondary / text-muted.
- **Règle :** Toute nouvelle couleur projet passe par `@theme` dans `globals.css`. Ne pas utiliser d'arbitrary values `[#xxx]` quand une variable `@theme` existe.

### R9 — `use client` uniquement pour l'interactivité
- **Constat :** Sidebar (`usePathname`), SearchForm (`useState`), PitchSection (`useState` tabs + clipboard) nécessitent `"use client"`. Tout le reste (pages, tableaux, badges, mocks) reste en Server Component.
- **Règle :** Toujours se demander si un composant a vraiment besoin de `"use client"`. Si non, le laisser en server component.

### R10 — Données mockées centralisées
- **Constat :** Toutes les données fictives sont dans `lib/mocks/`. Les pages les importent directement. Pas de fetch, pas d'API simulée.
- **Règle :** Tant qu'on est en phase mock, tout passe par `lib/mocks/`. Ne pas disperser les données dans les composants.

### R11 — Nettoyage du cache `.next/` après suppression de page
- **Erreur rencontrée :** Après suppression de `app/page.tsx` (déplacé vers `app/(app)/page.tsx`), le build échouait avec `Cannot find module '../../../app/page.js'`.
- **Cause racine :** Le validateur de types `.next/dev/types/validator.ts` gardait une référence à l'ancien `page.tsx`.
- **Solution :** `Remove-Item -Recurse .next` puis rebuild.
- **Règle pour le futur :** Toujours nettoyer `.next/` après avoir supprimé ou déplacé des fichiers de page.

### R12 — Pas de `tailwind.config.ts` (rappel)
- **Rappel :** Tailwind v4 est entièrement configuré dans `globals.css`. Toute tentative de créer un `tailwind.config.ts` sera ignorée. Le slider range dans SearchForm utilise les pseudo-éléments `::-webkit-slider-thumb` directement dans les classes Tailwind arbitraires.

### R13 — Design System de l'Étape 2
- **Thème :** Noir profond (#0a0a0d), surfaces anthracite, accent ambre (#f59e0b), texte blanc/gris.
- **Hiérarchie :** Score d'opportunité > scores techniques > données brutes. Les badges de statut sont discrets. Le pitch IA est la zone la plus mise en avant de la fiche détaillée.
- **Typographie :** Geist Sans pour tout. Une seule police. Tailles maîtrisées (xs à 2xl).
- **Règle :** Respecter ce système visuel dans toutes les étapes suivantes.

---

## Conventions & Règles issues de la Refonte Visuelle (post-Étape 2)

### R14 — Palette affinée pour un rendu premium
- **Constat :** Le thème initial manquait de profondeur. Les surfaces étaient trop claires et les bordures trop visibles.
- **Nouvelle palette :**
  - Surface : `#08080a`
  - Surface élevée : `#0f0f13`
  - Surface hover : `#1c1c24`
  - Bordure : `#23232b`
  - Bordure light : `#2d2d38`
  - Accent : `#f59e0b` avec glow `rgba(245,158,11,0.16)`
- **Règle :** Toujours préférer des surfaces très profondes et des bordures subtiles. L'accent doit ressentir comme une source lumineuse (ombres, glows discrets).

### R15 — Cohérence des rayons de bordure
- **Constat :** Mélange de `rounded-2xl` et `rounded-xl` créait un effet inconsistant.
- **Solution :** Uniformisation sur `rounded-xl` (14px) pour les cartes et `rounded-lg` (8px) pour les éléments internes. `rounded-full` réservé aux badges et pastilles.
- **Règle :** Utiliser `rounded-xl` pour les conteneurs principaux, `rounded-lg` pour les boutons/inputs/badges, `rounded-full` pour les indicateurs.

### R16 — Sidebar premium
- **Constat :** La sidebar initiale était basique (logo "L" dans un carré, navigation sans icône).
- **Solution :**
  - Picto éclair avec dégradé ambre et glow
  - Largeur 240px
  - Icônes inline SVG sur chaque lien
  - État actif avec barre verticale gauche + fond accent-muted
  - Footer avec avatar/profil utilisateur
- **Règle :** La sidebar est un élément d'identité produit. Elle mérite un logo travaillé et des états interactifs soignés.

### R17 — Hiérarchie typographique renforcée
- **Constat :** Titres trop petits, labels trop grands, manque de différenciation.
- **Solution :**
  - Titres de page : `text-xl` à `text-[28px]`, `font-bold`
  - Labels de section : `text-[11px]`, `uppercase`, `tracking-wider`, `font-semibold`
  - Données : `text-[13px]` pour les noms, `text-xs` pour les secondaires
- **Règle :** La taille typographique doit refléter l'importance métier, pas simplement remplir l'espace.

### R18 — Tableau prospects premium
- **Constat :** Le tableau ressemblait à un tableau HTML brut.
- **Améliorations :**
  - En-tête avec fond légèrement différent (`surface-overlay/50`)
  - Mini barres de progression pour Perf / SEO
  - Score d'opportunité avec anneau SVG coloré et glow
  - Badges de statut avec pastille
  - Hover visible sur les lignes
  - Lien "Voir" avec chevron
- **Règle :** Un tableau SaaS doit transformer les données brutes en signaux visuels immédiats (barres, couleurs, badges).

### R19 — Score d'opportunité calculé à partir des données réelles
- **Constat :** L'ancien score était toujours 90, indépendamment du prospect.
- **Solution :** Calcul dynamique dans `computeOpportunityScore(perf, seo, resp)` : plus le site est faible, plus le score est élevé. Maximum 92 si aucun site.
- **Règle :** Les indicateurs visuels doivent refléter les données réelles, même en mode mock.

### R20 — Évitez le "vide maladroit"
- **Constat :** La page Recherche utilisait `justify-center` avec beaucoup de padding vertical, ce qui créait un vide excessif.
- **Solution :** Alignement en haut (`py-10`), contenu remonté, formulaire et historique plus proches.
- **Règle :** En SaaS desktop, commencer le contenu plutôt haut dans la viewport. L'utilisateur doit voir l'action principale sans scroller.

### R21 — Ombres et glows pour la profondeur
- **Constat :** Interfaces plates = rendu template.
- **Solution :** Utilisation d'ombres portées très douces (`shadow-[0_0_40px_rgba(0,0,0,0.25)]`) et de glows accent (`shadow-[0_0_20px_rgba(245,158,11,0.18)]`) sur les éléments clés.
- **Règle :** Les cartes principales et les CTA principaux bénéficient d'un léger glow. Le reste reste plat.

### R22 — Inline SVG plutôt qu'icônes externes
- **Constat :** Pas de librairie d'icônes installée. Ajouter Lucide ou Heroicons augmenterait les dépendances.
- **Solution :** Utilisation d'icônes SVG inline minimalistes (24px viewBox, stroke 1.75) directement dans les composants.
- **Règle :** Garder cette approche simple tant que le besoin reste modeste. Si le nombre d'icônes explose, envisager `lucide-react`.

### R23 — Section Pitch IA plus premium
- **Constat :** L'ancienne section était fonctionnelle mais basique.
- **Améliorations :**
  - Onglets avec icônes
  - Contenu avec bordure accent verticale à gauche
  - Bouton copier dans l'en-tête
  - Typographie plus aérée (`leading-[1.7]`)
- **Règle :** Le pitch IA est le coeur de valeur du produit. Il doit être le bloc le plus soigné visuellement.
