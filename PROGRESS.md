# PROGRESS.md — LeadScraper AI

## Objectif global
LeadScraper AI — application SaaS de prospection B2B locale :
recherche d'entreprises locales, audit web, génération de pitchs IA.

## Roadmap synthétique
1. **Étape 1 — Fondation technique** ✅ Terminé
2. **Étape 2 — Interface SaaS mockée** ✅ Terminé
3. Étape 3 — Audit web (PageSpeed, SEO, responsive)
4. Étape 4 — Génération IA (pitchs, scripts, emails)
5. Étape 5 — Dashboard prospects + export

---

## Étape 1 — Fondation technique

### Périmètre
- [x] Initialisation Next.js (App Router, TypeScript, ESLint)
- [x] Configuration Tailwind CSS v4
- [x] Structure de projet SaaS propre
- [x] Installation et configuration du client Supabase
- [x] Schéma SQL : tables `searches` et `prospects`
- [x] Script de migration `supabase/migrations/001_create_tables.sql`
- [x] Validation des variables d'environnement (`lib/env.ts`)
- [x] Endpoint de health check `/api/health`
- [x] `.env.example` trackable
- [x] `MEMORY.md` initialisé
- [x] `PROGRESS.md` initialisé

### Décisions d'architecture
- **Supabase client :** `@supabase/supabase-js` (pas `@supabase/ssr`). L'Étape 1 n'a pas d'authentification. Le client est purement serveur via `SUPABASE_SERVICE_ROLE_KEY`.
- **Tailwind :** v4, config CSS-native via `@theme inline` dans `globals.css`.
- **ESLint :** Flat config (`eslint.config.mjs`), standard Next.js 16.
- **Langue :** `lang="fr"` dans le layout racine. Métadonnées en français.
- **Structure :** Plate — pas de `src/`, pas de sur-couches inutiles.

---

## Étape 2 — Interface SaaS mockée

### Périmètre initial
- [x] Thème sombre premium
- [x] Layout global avec sidebar
- [x] Page `/` — Recherche
- [x] Page `/prospects` — Tableau prospects
- [x] Page `/prospects/[id]` — Fiche détaillée
- [x] Composants réutilisables
- [x] Données mockées centralisées
- [x] Zéro appel API réel

### Refonte visuelle (post-Étape 2)
- [x] Palette affinée (noir #08080a, surfaces #0f0f13, bordures #23232b)
- [x] Sidebar premium : picto éclair dégradé, icônes, état actif avec barre latérale, profil utilisateur en pied
- [x] Page Recherche : contenu remonté, formulaire plus présent, recherches précédentes en grille de cartes
- [x] Page Prospects : header avec breadcrumb, tableau avec barres de scores, score d'opportunité en anneau SVG, badges de statut avec pastille
- [x] Fiche détaillée : anneaux plus grands, infos avec icônes, pain points en chips, pitch IA avec bordure accent et icônes d'onglets
- [x] Calcul dynamique du score d'opportunité à partir des données mockées
- [x] Cohérence des rayons de bordure (`rounded-xl` / `rounded-lg` / `rounded-full`)
- [x] Ombres et glows subtils sur cartes et CTA
- [x] Icônes SVG inline cohérentes

### Écrans créés
| Route | Composant | Type |
|---|---|---|
| `/` | `app/(app)/page.tsx` | Server Component + SearchForm (client) |
| `/prospects` | `app/(app)/prospects/page.tsx` | Server Component |
| `/prospects/[id]` | `app/(app)/prospects/[id]/page.tsx` | Server Component + PitchSection (client) |

### Composants créés ou refondus
| Composant | Emplacement | Rôle |
|---|---|---|
| `Sidebar` | `components/layout/sidebar.tsx` | Navigation premium avec icônes et profil |
| `SearchForm` | `components/search/search-form.tsx` | Formulaire compact avec icônes et slider glow |
| `RecentSearches` | `components/search/recent-searches.tsx` | Grille de cartes d'historique |
| `ProspectsTable` | `components/prospects/prospects-table.tsx` | Tableau premium avec barres et anneaux |
| `StatusBadge` | `components/prospects/status-badge.tsx` | Badge avec pastille de couleur |
| `ScoreBar / ResponsiveBadge / OpportunityScore` | `components/prospects/score-badge.tsx` | Indicateurs visuels avancés |
| `DetailHeader` | `components/prospect-detail/detail-header.tsx` | En-tête avec métadonnées en pills |
| `ScoreRing` | `components/prospect-detail/score-ring.tsx` | Anneau SVG avec glow |
| `OpportunityBlock` | `components/prospect-detail/opportunity-block.tsx` | Bloc opportunité avec bordure accent |
| `PainPoints` | `components/prospect-detail/pain-points.tsx` | Chips de points de douleur |
| `PitchSection` | `components/prospect-detail/pitch-section.tsx` | Pitch IA avec onglets icônes + copie |

### Mocks
| Fichier | Contenu |
|---|---|
| `lib/mocks/prospects.ts` | 5 prospects variés avec scores, statuts et pitchs mockés |
| `lib/mocks/searches.ts` | 4 recherches précédentes |

### Choix de design
- **Palette :** Très sombre (#08080a base), surfaces anthracite, accent ambre (#f59e0b), texte blanc/gris.
- **Hiérarchie visuelle :** Score d'opportunité (anneau SVG + glow) > barres de scores > données brutes.
- **Page détail :** Grille 8/4 colonnes. Anneaux SVG avec ombre portée. Pitch IA avec bordure accent verticale.
- **Sidebar :** 240px fixe, logo éclair dégradé, navigation avec icônes, profil utilisateur en pied.

### Éléments simulés (pas encore réels)
- Recherche : pas de scraping, pas d'API `/api/search`. Le bouton redirige vers `/prospects`.
- Prospects : données mockées, pas de requête Supabase.
- Scores techniques : valeurs mockées dans `lib/mocks/prospects.ts`.
- Pitch IA : textes mockés dans `lib/mocks/prospects.ts`.
- Score d'opportunité : calculé à partir des scores mockés.
- Copie dans le presse-papier : fonctionnelle (`navigator.clipboard.writeText`).

### Points où l'interface dépasse LeadRum
1. **Lisibilité :** Hiérarchie claire — le score d'opportunité est le plus visible, les données brutes sont secondaires.
2. **Fiche détaillée :** Structure 2 colonnes plus utile qu'un simple affichage de scores. Pain points + opportunité + pitch en dessous.
3. **Cohérence visuelle :** Thème sombre maîtrisé, palette restreinte, aucune couleur gadget.
4. **Pitch IA :** Onglets Cold Call / Email avec icônes et bouton copier directement exploitable.
5. **Tableau prospects :** Barres de progression, anneau de score, badges avec pastilles — moins de "tableau Excel".
6. **Sidebar :** Plus premium avec logo dégradé, icônes, états actifs travaillés.

### Points encore perfectibles
- **Animations :** Transitions d'apparition des lignes de tableau, hover plus fluides (peut être ajouté à l'Étape 3).
- **Responsive mobile :** La sidebar devrait se transformer en menu bascule sur petit écran.
- **Typographie :** Possibilité d'ajouter une seconde police pour les titres plus tard.
- **Données :** Le score d'opportunité pourrait intégrer la note Google et le nombre d'avis dans le calcul.
- **Filtres :** Le bouton "Filtrer" est visuel uniquement.

### Prochain jalon
**Étape 3** — Audit web (PageSpeed, SEO, responsive) avec de vraies données. Prérequis : clé API PageSpeed Insights, route API `/api/audit`.

### Commandes
```bash
npm run dev      # Démarrage local sur localhost:3000
npm run build    # Build de production
npm run lint     # ESLint
```
