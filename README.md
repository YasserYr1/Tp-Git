# Portfolio - README

## Présentation succincte

Ce projet est un portfolio personnel développé en **HTML**, **CSS**, et **JavaScript**. 
Le portfolio est organisé avec une structure claire comprenant plusieurs pages :

- **Page d'accueil** (`index.html`) :
  - Contient un header avec des liens de navigation (Accueil, CV, Portfolio, Contact, Compétences) et des boutons redirigeant vers GitHub et LinkedIn.
  - Plusieurs sections :
    1. **Hero** : Photo professionnelle, petite description, et bouton de contact.
    2. **CV** : Nom et prénom, photo, Présentation des expériences, éducation, centres d'intérêt et informations de contaact.
    3. **Portfolio** : Vidéos de projets (j'ai utilisé des video au lieu des photos) avec descriptions et liens vers les dépôts GitHub.
    4. **Contact** : Formulaire de contact.
  - Footer : copyright.

- **Page 404** (`404.html`) : Page d'erreur avec un lien pour retourner à la page d'accueil.

- **Pages de liens de navigation** dans le dossier `pages/` :
  - `cv.html` : Nom et prénom, photo, Présentation des expériences, éducation, centres d'intérêt et informations de contaact.
  - `portfolio.html` : Vidéos des projets réalisés avec descritpions et liens vers les dépôts GitHub.
  - `contact.html` : Formulaire de contact.
  - `competences.html` : Formulaire interactif pour ajouter et visualiser des compétences avec javascript.

### Fonctionnalités principales
- **Responsive Design** : Compatible avec différents appareils.
- **Navigation fluide** : Grâce au fichier `.htaccess`, les URLs sont réécrites pour ne pas afficher l'extension (ça marche pas dans le deployement github pages).
- **Portabilité** : Les ressources (images, vidéos, styles) sont organisées dans des dossiers dédiés.

---

## Étapes pour ouvrir et visualiser le site en local

1. **Cloner le dépôt** :
   ```
   git clone https://github.com/Yasseryr1/Tp-Git.git
   ```

2. **Naviguer dans le dossier du projet** :
   ```
   cd Tp-Git
   ```

3. **Lancer le projet localement** :
   - Ouvrez `index.html` dans un navigateur web ou utilisé `LiveServer`.

---

## Lien vers la version en ligne

La version en ligne du portfolio est accessible ici : [Portfolio déployé](https://yasseryr1.github.io/Tp-Git/)
