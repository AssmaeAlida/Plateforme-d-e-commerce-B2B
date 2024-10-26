# Plateforme E-Commerce B2B

## Aperçu

Ce projet est une **plateforme e-commerce** construite avec **Spring Boot** pour le backend, **React** pour le frontend, et **MySQL** pour la base de données. Elle permet aux utilisateurs de parcourir les produits, de les ajouter au panier, de passer des commandes et aux vendeurs de proposer leurs produits à la vente.

## Fonctionnalités

- **Authentification Utilisateur** : Les utilisateurs peuvent s'inscrire, se connecter et se déconnecter de manière sécurisée.
- **Gestion des Produits** : 
  - Les administrateurs peuvent ajouter, modifier et supprimer des produits.
  - Les vendeurs peuvent également déposer leurs produits à vendre.
- **Panier d'Achat** : Les utilisateurs peuvent ajouter des produits à leur panier, visualiser le contenu du panier et passer à la caisse.
- **Gestion des Commandes** : Les administrateurs peuvent gérer les commandes, les marquer comme expédiées et consulter l'historique des commandes.
- **Fonctionnalité de Recherche** : Les utilisateurs peuvent rechercher des produits en fonction de mots-clés.

## Processus d'Inscription Vendeur

- Les utilisateurs peuvent s'inscrire en tant que vendeur en fournissant les informations requises et en soumettant une demande.
- Les administrateurs de la plateforme peuvent approuver ou rejeter les demandes d'inscription vendeur.

## Processus de Dépôt de Produits

- Une fois inscrit en tant que vendeur et approuvé par les administrateurs, les vendeurs peuvent déposer leurs produits à vendre.
- Les vendeurs fournissent les détails du produit, y compris le nom, la description, le prix, les images, etc.
- Les produits déposés sont soumis à une vérification par les administrateurs avant d'être publiés sur la plateforme.

## Technologies Utilisées

- **Backend** : Spring Boot, MySQL
- **Frontend** : React, React Router
- **Style** : CSS, Bootstrap
- **Authentification** : JSON Web Tokens (JWT)
- **API** : API RESTful

## Installation

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/AssmaeAlida/Plateforme-d-e-commerce-B2B.git
   ```

2. Naviguez vers le répertoire backend et exécutez :

   ```bash
   cd backend
   mvn spring-boot:run
   ```

3. Naviguez vers le répertoire frontend et exécutez :

   ```bash
   cd frontend
   npm install
   npm start
   ```

## Configuration

- Mettez à jour les détails de connexion à la base de données MySQL dans le fichier `application.properties`.
- Ajustez les variables d'environnement et les configurations selon les besoins.

## Utilisation

- Accédez à l'application à [http://localhost:3000](http://localhost:3000) après avoir démarré les serveurs backend et frontend.
- Utilisez les identifiants de connexion fournis pour vous connecter et explorer la plateforme.

