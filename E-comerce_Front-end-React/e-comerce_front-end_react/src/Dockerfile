# Utilisez une image de node comme base
FROM node:20.12.1

# Définir le répertoire de travail dans le conteneur Docker
WORKDIR /app

# Copier le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Installer vite globalement
RUN npm install -g vite

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application s'exécute dans le conteneur
# EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start", "--", "--host"]