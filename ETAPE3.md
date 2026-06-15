# Cahier des Charges — Étape 3
## Projet
LeadScraper AI

## Objectif de l’étape 3
Mettre en place le moteur réel de collecte de prospects à partir de Google Maps via **Apify**, en s’appuyant sur l’interface déjà construite à l’étape 2.

Cette étape marque le passage entre une UI mockée et un flux réel de données. L’utilisateur doit pouvoir lancer une recherche avec une ville, un secteur et un nombre de prospects, puis obtenir de vrais résultats stockés en base de données et affichés dans l’application.

Le but est de construire un pipeline simple, propre, robuste et maintenable.

---

## Résultat attendu
À la fin de l’étape 3 :
- le formulaire de recherche n’utilise plus des mocks,
- une vraie route backend de recherche existe,
- cette route appelle Apify pour récupérer des entreprises depuis Google Maps,
- les résultats sont normalisés,
- les données sont insérées dans Supabase,
- l’écran `/prospects` affiche les données réelles issues de la recherche,
- l’application sait relier une recherche à sa liste de prospects,
- `MEMORY.md` et `PROGRESS.md` sont mis à jour.

---

## Positionnement de l’étape 3
Cette étape doit rester concentrée sur **la collecte et le stockage de la donnée brute utile**.

Elle ne doit pas encore inclure :
- audit PageSpeed,
- génération IA via DeepSeek,
- scoring enrichi complexe,
- background jobs avancés,
- export CSV réel,
- logique commerciale avancée.

On veut d’abord fiabiliser la base :
- recherche,
- récupération,
- normalisation,
- sauvegarde,
- affichage réel.

---

## Fournisseur imposé
Le provider retenu pour cette étape est **Apify**.

L’intégration doit être pensée proprement pour permettre :
- un remplacement futur éventuel du provider si nécessaire,
- une logique d’appel centralisée,
- une gestion propre des erreurs,
- une validation des réponses,
- une maintenance simple.

---

## Flux fonctionnel attendu

### 1. Lancement d’une recherche
Depuis la page de recherche, l’utilisateur renseigne :
- ville ou zone géographique,
- secteur d’activité,
- nombre de prospects,
- filtre optionnel “Sans site web uniquement”.

Le bouton de recherche ne doit plus seulement naviguer. Il doit déclencher un vrai appel vers le backend.

### 2. Création de la recherche
Le backend doit créer une entrée dans la table `searches` avec :
- la ville,
- le secteur,
- la date,
- éventuellement des métadonnées utiles si besoin.

### 3. Appel à Apify
Le backend doit appeler Apify pour récupérer des résultats Google Maps à partir des paramètres de recherche.

### 4. Normalisation des données
Les résultats récupérés doivent être transformés dans un format interne stable.

### 5. Insertion des prospects
Chaque prospect récupéré doit être enregistré dans la table `prospects` avec rattachement à `search_id`.

### 6. Affichage des résultats
Une fois les prospects enregistrés, l’application doit afficher la liste réelle sur la page `/prospects`.

---

## Données cibles à récupérer
L’intégration Apify doit viser au minimum les champs suivants quand ils sont disponibles :
- nom de l’entreprise,
- adresse,
- téléphone,
- site web,
- note Google,
- nombre d’avis.

Ces données correspondent au socle nécessaire pour préparer les étapes suivantes.

Si certains champs sont absents, le système doit rester robuste.

---

## Gestion du paramètre “Nombre de prospects”
Le champ “Nombre de prospects” saisi dans l’UI doit être pris en compte dans la recherche.

Attendu :
- demander un volume cohérent à Apify,
- limiter les insertions au nombre demandé,
- éviter les doublons inutiles,
- garantir un résultat propre côté frontend.

---

## Gestion du filtre “Sans site web uniquement”
Le filtre doit être pris en compte à cette étape.

S’il n’est pas directement supporté en entrée par le provider choisi, il peut être appliqué après récupération et normalisation.

Le comportement attendu est :
- si activé, seuls les prospects sans site web sont conservés pour affichage et insertion,
- sinon, tous les prospects sont conservés.

---

## Architecture attendue
L’implémentation doit rester modulaire.

Exemples de structure acceptable :
- `app/api/search/route.ts`
- `lib/apify/`
- `lib/apify/client.ts`
- `lib/apify/mappers.ts`
- `lib/validators/`
- `lib/search/`
- `lib/search/create-search.ts`
- `lib/search/save-prospects.ts`
- `types/`
- `types/search.ts`
- `types/prospect.ts`

L’architecture exacte peut varier, mais elle doit séparer clairement :
- l’appel au provider,
- la validation,
- la normalisation,
- la logique base de données,
- la logique route handler.

---

## Route backend attendue
Créer une route backend dédiée, par exemple :
- `POST /api/search`

### Cette route doit :
1. recevoir les données du formulaire,
2. valider les entrées,
3. créer la recherche,
4. appeler Apify,
5. normaliser la réponse,
6. filtrer si nécessaire,
7. enregistrer les prospects,
8. retourner un résultat propre au frontend.

### Entrées attendues
- `city`
- `sector`
- `limit`
- `withoutWebsiteOnly`

### Sortie attendue
Un objet de réponse simple, par exemple :
- identifiant de la recherche,
- nombre de prospects enregistrés,
- éventuel message d’état,
- éventuellement les prospects normalisés si utile pour la navigation.

---

## Validation et robustesse
Cette étape doit être robuste.

Exigences :
- validation des entrées côté backend,
- validation minimale de la réponse Apify,
- gestion des champs manquants,
- gestion des erreurs réseau,
- timeouts explicites,
- retries limités si pertinents,
- messages d’erreur exploitables,
- logs utiles sans secrets.

L’intégration ne doit pas casser si :
- Apify retourne moins de résultats que prévu,
- certains prospects n’ont pas de téléphone,
- certains n’ont pas de site,
- certains champs sont absents ou mal formés.

---

## Gestion des doublons
Une stratégie simple de limitation des doublons doit être prévue.

Sans sur-ingénierie, l’étape 3 doit déjà éviter de remplir la base avec des duplications grossières.

Approches acceptables :
- déduplication locale avant insertion,
- vérification sur couple `company_name + address`,
- ou autre logique simple et justifiée.

Le but n’est pas la perfection, mais d’éviter une base rapidement sale.

---

## Reconnexion frontend
La page de recherche existante doit être rebranchée sur la route backend.

### Comportement attendu côté UI
- soumission réelle du formulaire,
- état loading,
- gestion d’erreur simple,
- redirection vers `/prospects` une fois la recherche terminée,
- affichage des résultats réels.

Le frontend ne doit pas implémenter de logique lourde.
Il doit simplement consommer le backend proprement.

---

## Écran `/prospects`
La page `/prospects` doit maintenant consommer de vraies données.

Attendu :
- afficher les résultats de la recherche réelle,
- conserver une présentation propre,
- gérer les cas où certains champs sont absents,
- rester compatible avec la future étape d’enrichissement technique.

Si nécessaire, une recherche récente peut être chargée par défaut ou via identifiant de recherche.

---

## Variables d’environnement attendues
Prévoir proprement les variables nécessaires à Apify, par exemple :
- token API Apify,
- éventuelles variables liées à l’acteur choisi.

Attendu :
- `.env.example` mis à jour,
- aucune clé hardcodée,
- séparation claire entre public et serveur,
- documentation minimale d’installation.

---

## Choix de l’acteur Apify
L’implémentation peut s’appuyer sur un acteur Google Maps pertinent dans Apify.

Le choix exact peut varier, mais il doit être :
- documenté,
- stable,
- cohérent avec la récupération des champs requis,
- facile à maintenir.

Le code doit éviter de disperser des détails spécifiques à l’acteur dans toute l’application.

---

## Exigences techniques
- conserver Next.js App Router,
- conserver TypeScript strict,
- conserver Tailwind côté UI,
- utiliser une logique serveur propre,
- ne pas exposer de secret côté client,
- isoler la logique Apify,
- préparer le terrain pour les étapes 4 et 5,
- ne pas coder PageSpeed ni DeepSeek dans cette étape.

---

## Gestion documentaire obligatoire

### `MEMORY.md`
L’IA doit documenter :
- les erreurs d’intégration Apify,
- les difficultés de mapping des champs,
- les choix de validation,
- la stratégie retenue pour les doublons,
- les pièges à éviter pour la suite.

### `PROGRESS.md`
L’IA doit documenter :
- le périmètre exact de l’étape 3,
- les routes créées,
- les services créés,
- les variables d’environnement ajoutées,
- le comportement réel désormais branché,
- ce qui reste volontairement hors périmètre,
- ce qui est prêt pour l’étape 4.

---

## Livrables attendus
À la fin de l’étape 3, on doit avoir :
1. Une route `POST /api/search` fonctionnelle.
2. Une intégration Apify encapsulée proprement.
3. Une validation d’entrée et une normalisation des résultats.
4. Une insertion réelle dans `searches`.
5. Une insertion réelle dans `prospects`.
6. La prise en compte du nombre de prospects.
7. La prise en compte du filtre “Sans site web uniquement”.
8. La page `/prospects` branchée sur les vraies données.
9. `.env.example` mis à jour.
10. `MEMORY.md` mis à jour.
11. `PROGRESS.md` mis à jour.

---

## Critères d’acceptation
L’étape 3 est validée si :
- une recherche réelle peut être lancée depuis l’interface,
- Apify est bien appelé côté serveur,
- les résultats sont enregistrés en base,
- les prospects s’affichent dans l’application,
- le filtre “Sans site web uniquement” fonctionne,
- aucun secret n’est exposé,
- aucune logique d’étape 4 ou 5 n’est implémentée prématurément,
- la structure de code reste propre et maintenable.

---

## Hors périmètre
Ne pas implémenter dans cette étape :
- audit PageSpeed,
- score performance réel,
- score SEO réel,
- génération IA,
- DeepSeek,
- scripts d’appel réels,
- email IA réel,
- export CSV réel,
- système de queue avancé.

---

## Philosophie d’exécution
Cette étape doit transformer le projet en un vrai moteur de collecte utilisable.

Le but n’est pas encore de faire un pipeline complet de prospection automatisée, mais de fiabiliser le socle de recherche réelle :
- recherche réelle,
- données réelles,
- stockage réel,
- affichage réel.

Il faut aller au plus simple, au plus propre et au plus robuste pour préparer les étapes suivantes.
