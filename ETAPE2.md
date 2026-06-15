# Cahier des Charges — Étape 2
## Projet
LeadScraper AI

## Vision produit
LeadScraper AI ne doit pas être une copie de LeadRum.

LeadRum est une référence de départ pour comprendre le marché, la structure fonctionnelle et certains codes visuels, mais l’objectif de LeadScraper AI est de proposer une expérience meilleure sur les points les plus importants pour un utilisateur métier :
- compréhension immédiate,
- rapidité de lecture,
- priorisation commerciale,
- qualité perçue,
- crédibilité du produit,
- efficacité opérationnelle.

L’interface doit donc s’inspirer des bons repères observés sur LeadRum tout en le dépassant clairement en exécution.

---

## Objectif de l’étape 2
Construire une interface graphique SaaS moderne, dark mode, crédible et visuellement supérieure à LeadRum, avec des données fictives réalistes, afin de valider :
- le design produit,
- la hiérarchie visuelle,
- l’ergonomie métier,
- la logique de navigation,
- et la perception de valeur.

Cette étape ne doit pas encore connecter les vraies APIs ni exécuter la logique métier réelle. Elle doit en revanche donner l’impression d’un produit presque prêt à être utilisé.

---

## Positionnement concurrentiel
L’objectif explicite de cette étape est de créer une expérience qui fasse mieux que LeadRum sur les dimensions suivantes :
- une interface plus premium,
- une lecture plus rapide des leads,
- une meilleure mise en avant des opportunités,
- une fiche prospect plus utile pour vendre,
- une structure plus claire,
- une sensation de produit plus sérieux et plus maîtrisé.

LeadRum doit être considéré comme une base comparative, pas comme un modèle final à reproduire [cite:13].

---

## Direction visuelle
Le design doit respecter les principes suivants :

- thème très sombre : noir, anthracite, gris carbone,
- textes blancs, gris clairs, gris secondaires maîtrisés,
- accents jaune, orange ou doré pour les actions importantes,
- très peu de bruit visuel,
- design sobre, professionnel, premium,
- densité maîtrisée,
- interface pensée pour un usage quotidien intensif.

L’interface doit évoquer :
- un outil de prospection haut de gamme,
- une sensation de vitesse,
- une lecture immédiate,
- une valeur métier concrète.

Il faut éviter :
- l’effet clone,
- l’effet template générique,
- les composants trop décoratifs,
- les couleurs gadgets,
- les blocs trop lourds ou trop bavards.

---

## Principes UX supérieurs à LeadRum
Pour dépasser LeadRum, l’interface doit être meilleure sur les points suivants :

### 1. Lisibilité
L’utilisateur doit comprendre en quelques secondes :
- où il est,
- ce qu’il peut faire,
- quels prospects valent le plus le coup.

### 2. Priorisation
Les meilleurs leads doivent ressortir immédiatement.

### 3. Actionnabilité
Chaque écran doit pousser l’utilisateur vers une action claire :
- lancer une recherche,
- ouvrir un prospect,
- comprendre pourquoi il est intéressant,
- récupérer un angle commercial.

### 4. Hiérarchie
Le score d’opportunité et les problèmes détectés doivent être plus utiles que la simple donnée brute.

### 5. Crédibilité produit
L’outil doit faire plus “produit premium” que “outil de scraping”.

---

## Objectif concret de l’étape 2
Créer une version UI entièrement mockée mais extrêmement crédible de LeadScraper AI, avec :
- un layout global propre,
- une page de recherche efficace,
- un tableau prospects lisible,
- une fiche prospect très forte visuellement,
- une navigation simple,
- des composants réutilisables,
- des données fictives réalistes.

Le résultat doit être assez fort pour donner envie de brancher immédiatement les APIs réelles ensuite.

---

## Périmètre de l’étape 2
Cette étape couvre uniquement :
- la structure d’interface,
- la navigation,
- les composants UI,
- les données mockées,
- la préparation du futur branchement technique.

Cette étape ne couvre pas :
- scraping réel,
- Supabase métier réel,
- route `/api/search`,
- PageSpeed réel,
- DeepSeek réel,
- génération IA réelle,
- backend métier.

---

## Structure globale de l’application

### Layout global
Créer un layout applicatif avec :
- une sidebar simple et propre,
- un accès à **Recherche**,
- un accès à **Prospects**,
- une structure visuelle homogène sur toutes les pages,
- une zone principale confortable,
- une expérience desktop prioritaire, avec mobile acceptable.

### Exigence de qualité
Le layout doit sembler plus maîtrisé que celui d’un simple dashboard CRUD :
- bons espacements,
- bonne respiration,
- navigation claire,
- identité produit perceptible.

---

## Écran 1 — Recherche
### Route
`/`

### Objectif
Créer une page d’accueil qui donne immédiatement envie d’utiliser le produit.

### Exigences
La page doit contenir :
- un titre fort : **“Trouvez vos prochains clients”**
- un sous-texte éventuel expliquant brièvement la promesse
- une carte centrale de recherche
- un champ ville / zone géographique
- un champ secteur d’activité
- un slider de 10 à 50 prospects
- un bouton principal **“Lancer la recherche”**
- une section **“Recherches précédentes”**

### Attentes UX
Cette page doit être :
- plus claire que LeadRum,
- plus premium visuellement,
- plus directe,
- plus rassurante.

### Recherches précédentes
Afficher les recherches précédentes sous forme de cartes ou de blocs compacts, facilement cliquables, avec un style propre et discret.

### Comportement
- aucune vraie requête,
- navigation simulée vers `/prospects`,
- interactivité locale uniquement.

---

## Écran 2 — Prospects
### Route
`/prospects`

### Objectif
Créer un écran qui permette d’identifier très rapidement les opportunités.

### Exigences
Créer un tableau ou une liste très lisible avec :
- Entreprise
- Téléphone
- Site Web
- Note Google
- Scores techniques
- Score d’opportunité
- Statut
- Action

### Priorité métier
Le tableau doit permettre de repérer instantanément :
- qui n’a pas de site,
- qui a un site faible,
- qui a un gros potentiel,
- qui a déjà été contacté.

### Présentation des scores techniques
Utiliser des badges, pastilles ou indicateurs compacts pour :
- Performance
- SEO
- Responsive / Mobile

### Présentation du score d’opportunité
Le score d’opportunité doit être **visuellement plus important** que les autres micro-indicateurs.

Il doit être immédiatement repérable :
- par sa taille,
- sa couleur,
- son placement,
- ou sa hiérarchie visuelle.

### Présentation des statuts
Prévoir des badges clairs :
- Nouveau = bleu
- Appelé = jaune
- Pas intéressé = rouge

### Comportement
- données mockées uniquement,
- environ 5 prospects,
- action “Voir” vers la fiche détaillée,
- lisibilité maximale.

---

## Écran 3 — Fiche prospect détaillée
### Route
`/prospects/[id]`

### Objectif
Créer une fiche détaillée plus utile que celle de LeadRum pour un usage commercial réel.

### Philosophie
Cette page ne doit pas simplement afficher des scores. Elle doit aider à répondre à :
- Pourquoi ce prospect est intéressant ?
- Qu’est-ce qui ne va pas chez lui ?
- Quel angle de vente utiliser ?
- Quelle action commerciale lancer maintenant ?

### En-tête
Prévoir :
- nom de l’entreprise,
- note Google Maps,
- nombre d’avis,
- bouton retour,
- éventuellement statut visible.

### Structure principale
Créer une grille en deux colonnes.

#### Colonne gauche
Afficher les scores clés :
- Potentiel commercial
- Qualité du site

Les visualisations peuvent être :
- cercles de progression,
- anneaux,
- ou composants équivalents sobres et lisibles.

Le potentiel commercial doit inclure :
- Besoin
- Autorité
- Capacité
- Timing

La qualité du site doit inclure :
- Performance
- SEO
- Responsive
- SSL ou équivalent

#### Colonne droite
Afficher les informations utiles :
- téléphone,
- site web,
- adresse,
- email,
- statut,
- résumé rapide si pertinent.

### Bloc “Pourquoi c’est une opportunité”
Ajouter un bloc synthétique expliquant pourquoi ce prospect mérite une action.
Ce bloc peut être mocké, mais il doit être très utile visuellement.

### Bloc “Pain points détectés”
Afficher clairement les problèmes principaux, par exemple :
- absence de site,
- site lent,
- responsive insuffisant,
- SEO faible,
- design daté,
- manque de réassurance.

Ces problèmes doivent être visibles rapidement, sous forme de liste claire ou de cartes compactes.

### Bloc IA / Pitch commercial
Même si la génération réelle viendra plus tard, cette zone doit être mise en valeur.
Afficher :
- un pitch mocké,
- un bouton copier,
- une présentation premium,
- une zone qui fait comprendre immédiatement la valeur du produit.

### Onglets
Créer des onglets cliquables :
- Cold Call
- Email Automation

#### Cold Call
Afficher un script d’appel mocké structuré et exploitable.

#### Email Automation
Afficher un email mocké crédible, lisible, prêt à être envoyé en apparence.

### Attente stratégique
La fiche détaillée doit être un **vrai avantage concurrentiel**.
C’est ici que ton produit peut dépasser LeadRum le plus visiblement.

---

## Mocks
Les données mockées doivent être :
- réalistes,
- variées,
- cohérentes,
- suffisamment riches pour tester tous les états visuels.

Prévoir des cas :
- prospect sans site,
- prospect avec site lent,
- prospect avec bons avis mais mauvais SEO,
- prospect déjà appelé,
- prospect très fort en opportunité.

---

## Architecture attendue
Le code doit être modulaire et propre.

Exemples :
- `app/page.tsx`
- `app/prospects/page.tsx`
- `app/prospects/[id]/page.tsx`
- `components/layout/`
- `components/search/`
- `components/prospects/`
- `components/prospect-detail/`
- `components/ui/`
- `lib/mocks/`
- `types/`

Les composants doivent être réutilisables.
Les mocks doivent être centralisés.
Les types doivent être clairs.

---

## Contraintes techniques
- Tailwind CSS obligatoire
- `use client` uniquement quand nécessaire
- aucun appel API réel
- aucun appel DeepSeek réel
- aucun backend métier réel
- aucun bug de compilation
- aucune sur-ingénierie inutile
- code prêt pour brancher les vraies données plus tard

---

## Gestion documentaire obligatoire

### `MEMORY.md`
L’IA doit documenter :
- les erreurs rencontrées,
- les décisions UI importantes,
- les conventions visuelles,
- les points à retenir pour dépasser LeadRum proprement à l’étape 3 et suivantes.

### `PROGRESS.md`
L’IA doit documenter :
- le périmètre exact de l’étape 2,
- les écrans créés,
- les composants créés,
- les choix de layout,
- les mocks ajoutés,
- les éléments encore simulés,
- les points où l’interface surpasse déjà LeadRum.

---

## Livrables attendus
À la fin de l’étape 2, on doit avoir :

1. Un layout global avec sidebar.
2. Une page `/` forte visuellement.
3. Une page `/prospects` très lisible.
4. Une page `/prospects/[id]` différenciante et premium.
5. Une navigation fluide.
6. Des composants modulaires.
7. Des mock data centralisées.
8. Une hiérarchie visuelle supérieure à LeadRum.
9. `MEMORY.md` mis à jour.
10. `PROGRESS.md` mis à jour.

---

## Critères d’acceptation
L’étape 2 est validée si :
- le projet compile sans erreur,
- les pages s’affichent correctement,
- le thème sombre est cohérent,
- la sidebar fonctionne,
- la page Recherche est claire et engageante,
- la page Prospects permet d’identifier rapidement les bons leads,
- la fiche détaillée aide réellement à vendre,
- les mocks sont crédibles,
- aucun appel API réel n’existe,
- la perception produit est meilleure qu’un simple clone de LeadRum.

---

## Hors périmètre
Ne pas implémenter dans cette étape :
- scraping réel,
- route `/api/search`,
- Supabase métier réel,
- PageSpeed réel,
- DeepSeek réel,
- génération IA réelle,
- export CSV réel,
- backend métier.

---

## Philosophie d’exécution
Cette étape ne consiste pas à “faire comme LeadRum”.

Elle consiste à :
- comprendre ce qui marche chez LeadRum,
- éliminer ce qui est moyen,
- amplifier la clarté,
- améliorer la valeur perçue,
- et construire une interface plus actionnable, plus premium et plus mémorable.