# Cahier des Charges — Étape 1
## Projet
LeadScraper AI

## Objectif de l’étape 1
Mettre en place le socle technique initial du projet afin de disposer d’une base saine, exécutable localement, connectée à Supabase, et prête à accueillir les développements UI et backend des étapes suivantes.

Cette étape ne doit pas encore intégrer :
- le scraping Google Maps,
- les audits PageSpeed,
- la génération IA,
- la logique métier avancée.

L’objectif est uniquement de produire une base de projet propre, sécurisée, documentée et opérationnelle.

## Résultat attendu
À la fin de l’étape 1 :
- le projet tourne en local sur `localhost:3000`,
- le projet utilise Next.js avec App Router,
- Tailwind CSS est installé et fonctionnel,
- Supabase est configuré proprement,
- les tables `searches` et `prospects` existent,
- les variables d’environnement sont branchées correctement,
- une connexion test à la base de données fonctionne,
- la structure du projet est propre et prête pour l’étape 2,
- `MEMORY.md` et `PROGRESS.md` sont mis à jour.

---

## Stack imposée
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel-compatible architecture
- Structure propre pour futur usage de shadcn/ui

## Contraintes
- Aucun secret ne doit être exposé côté client.
- Le projet doit être prêt à être déployé plus tard sur Vercel.
- L’architecture doit rester simple, lisible et scalable.
- Le code doit être propre, strictement typé et maintenable.
- L’étape 1 ne doit pas surcharger le projet avec des fonctionnalités non demandées.

---

## Périmètre fonctionnel de l’étape 1

### 1. Initialisation du projet
Créer une base Next.js moderne avec :
- App Router activé,
- TypeScript,
- ESLint,
- structure claire des dossiers,
- configuration prête pour développement local.

### 2. Installation et configuration du style
Installer et configurer :
- Tailwind CSS,
- les fichiers de styles globaux,
- une base propre de design system technique,
- un thème sombre simple par défaut si pertinent, sans chercher à finaliser le design de l’étape 2.

### 3. Configuration Supabase
Mettre en place :
- la connexion à Supabase,
- les variables d’environnement nécessaires,
- un client Supabase côté serveur,
- une structure claire pour l’usage futur de l’authentification et des requêtes base de données.

### 4. Base de données
Créer les tables suivantes dans Supabase :

#### Table `searches`
- `id` UUID primary key
- `city` varchar not null
- `sector` varchar not null
- `created_at` timestamp with time zone default now()

#### Table `prospects`
- `id` UUID primary key
- `search_id` UUID references `searches(id)` on delete cascade
- `company_name` varchar not null
- `phone` varchar nullable
- `website` varchar nullable
- `google_rating` float nullable
- `review_count` int nullable
- `address` varchar nullable
- `status` varchar default `Nouveau`
- `performance_score` int nullable
- `seo_score` int nullable
- `is_responsive` boolean nullable
- `ai_pitch` text nullable
- `ai_script_call` text nullable
- `ai_email` text nullable
- `created_at` timestamp with time zone default now()

### 5. Migrations
Le schéma SQL doit être formalisé proprement.
Le projet doit contenir :
- soit les migrations locales si la stratégie choisie les supporte,
- soit au minimum un script SQL propre et versionnable.

### 6. Test de connexion
Créer un mécanisme simple permettant de vérifier que le projet communique bien avec Supabase.
Exemples acceptables :
- une page de test serveur,
- un petit helper de health check,
- une requête simple de lecture sur une table,
- un affichage minimal indiquant que la connexion fonctionne.

Ce test doit rester simple et ne pas devenir une vraie feature produit.

---

## Structure de projet attendue

Le projet doit être organisé avec une structure claire, par exemple :

- `app/`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `lib/`
- `lib/supabase/`
- `lib/env/`
- `types/`
- `supabase/` si pertinent
- `MEMORY.md`
- `PROGRESS.md`

L’architecture exacte peut varier légèrement, mais elle doit rester cohérente et justifiée.

---

## Gestion des variables d’environnement
Le projet doit gérer proprement :
- URL Supabase,
- clé publique Supabase,
- éventuelles variables serveur futures,
- séparation claire entre variables publiques et privées.

Le projet doit inclure :
- un `.env.example` complet,
- aucune valeur sensible hardcodée dans le code,
- aucun secret commité.

---

## Exigences de qualité
- TypeScript strict
- Code lisible
- Fichiers bien nommés
- Responsabilités bien séparées
- Aucun code mort inutile
- Aucun appel API externe non demandé
- Aucun composant inutilement complexe
- Aucun usage client d’un secret serveur

---

## Gestion documentaire obligatoire

### Fichier `MEMORY.md`
Le projet contient un fichier `MEMORY.md` servant de mémoire d’apprentissage de l’agent.

L’IA doit y noter :
- les erreurs rencontrées,
- les causes probables,
- les correctifs appliqués,
- les précautions à retenir pour la suite,
- les conventions importantes découvertes pendant l’implémentation.

Le contenu doit être utile, concis, exploitable, et orienté amélioration continue.

### Fichier `PROGRESS.md`
Le projet contient un fichier `PROGRESS.md` servant de journal d’avancement.

L’IA doit y noter :
- l’objectif global du projet,
- la roadmap synthétique,
- le périmètre de l’étape 1,
- ce qui a été terminé,
- ce qui reste à faire,
- les décisions d’architecture prises,
- les prochains jalons.

Le document doit permettre à une autre IA ou à un développeur humain de reprendre le projet sans perdre le contexte.

---

## Livrables attendus
À la fin de l’étape 1, on doit avoir :

1. Un projet Next.js fonctionnel.
2. Tailwind CSS configuré.
3. Supabase branché proprement.
4. Le schéma SQL de base créé pour `searches` et `prospects`.
5. Une vérification simple de connectivité base de données.
6. Un `.env.example`.
7. Un `MEMORY.md` initialisé et mis à jour.
8. Un `PROGRESS.md` initialisé et mis à jour.
9. Un code suffisamment propre pour démarrer immédiatement l’étape 2.

---

## Critères d’acceptation
L’étape 1 est validée si :
- `npm run dev` démarre sans erreur,
- l’application répond sur `localhost:3000`,
- Supabase est correctement configuré,
- les tables existent avec la bonne structure,
- le projet ne contient pas de secret exposé,
- la structure de code est claire,
- `MEMORY.md` et `PROGRESS.md` sont présents et renseignés,
- aucun élément des étapes 3, 4 ou 5 n’a été implémenté prématurément.

---

## Hors périmètre
Ne pas implémenter dans cette étape :
- scraping Google Maps,
- route `/api/search`,
- audit PageSpeed,
- prompts OpenAI ou Anthropic,
- génération de pitchs,
- tableau dynamique réel,
- authentification complexe,
- système de billing,
- logique CRM avancée.

---

## Philosophie d’exécution
Cette étape doit privilégier :
- la propreté de fondation,
- la simplicité,
- la maintenabilité,
- la compatibilité avec les étapes suivantes,
- la traçabilité via `MEMORY.md` et `PROGRESS.md`.

Le but n’est pas d’aller vite en bricolant, mais d’établir une base saine pour tout le projet.