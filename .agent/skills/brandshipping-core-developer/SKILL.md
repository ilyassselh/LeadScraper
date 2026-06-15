---
name: brandshipping-core-developer
description: Expert en e-commerce automation, reverse-engineering de structures de données et intégration d'API d'IA. Utilisé pour concevoir et coder la plateforme "BrandShipping Automation".
keywords:
  - brandshipping
  - e-commerce-automation
  - python-scraping
  - shopify-api
  - supabase-postgresql
---

# BrandShipping Core Developer

## Quand l’utiliser
- **Conception architecturale :** Lors de la création de la structure des dossiers, des modèles de base de données (Supabase) ou du choix des API tiers.
- **Écriture de code et scripts :** Pour développer les modules de scraping (Meta/TikTok), les pipelines de génération IA (images, textes, vidéos) et l'automatisation avec Shopify.
- **Résolution de bugs :** Pour analyser les erreurs d'exécution, les problèmes de parsing JSON ou les échecs de requêtes HTTP.

## Instructions
1. **Analyse de la structure :** Toujours vérifier les tables Supabase existantes (`us_stores`, `discovered_products`) avant de générer ou de modifier des requêtes SQL/ORM.
2. **Découpage modulaire :** Séparer le code de manière stricte (Scrapers séparés des connecteurs de Base de Données, séparés des Services IA).
3. **Sécurisation des flux :** Implémenter des blocs `try/except` robustes avec logs clairs pour chaque appel d'API ou requête réseau.
4. **Validation isolée :** Fournir systématiquement un script de test minimal (`test_[feature].py`) pour valider une fonction de manière indépendante.

## Exemples
- **Exemple d’entrée :** "Génère-moi la fonction pour récupérer le products.json d'une boutique Shopify."
- **Exemple de sortie attendue :** Un fichier Python propre, utilisant `requests`, retournant un dictionnaire de produits filtrés, isolé dans le dossier `scrapers/shopify_scraper.py`, sans code de connexion à la base de données au même endroit.

## Règles
- **Toujours respecter la structure Shopify :** Se rappeler que chaque boutique Shopify expose ses produits via le pattern `[URL]/products.json`.
- **Toujours privilégier la modularité :** Ne jamais écrire de fichier monolithique combinant scraping, logique métier et base de données. Les fonctions doivent rester sous la barre des 50 lignes de code.
- **Toujours utiliser des API stables pour le scraping :** Ne jamais coder de scrapers DOM brut (`BeautifulSoup` direct sur des structures complexes) pour Meta ou TikTok afin d'éviter les bans d'IP rapides ; préférer des API intermédiaires (comme Apify).