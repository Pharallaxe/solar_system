# Système Solaire

![Illustration de l'auteur](./img/pharallaxe.png)


Ce projet représente une visualisation simplifiée du système solaire en HTML et CSS. Il permet d'afficher les planètes principales avec la possibilité de les montrer ou de les cacher à l'aide de cases à cocher.

## Licence
Ce projet est sous licence Apache.

## Contenu

- [Système Solaire](#système-solaire)
  - [Licence](#licence)
  - [Contenu](#contenu)
  - [Fonctionnalités](#fonctionnalités)
  - [Structure des fichiers](#structure-des-fichiers)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Détails des fichiers](#détails-des-fichiers)
    - [`index.html`](#indexhtml)
    - [`styles.css`](#stylescss)
    - [`styles.scss`](#stylesscss)
    - [`app.js`](#appjs)
  - [Limitations](#limitations)
  - [Améliorations possibles](#améliorations-possibles)

## Fonctionnalités

- **Affichage des planètes** : Visualisation des planètes Mercure, Vénus, Terre (avec la Lune), Mars, Jupiter (avec ses lunes principales), Saturne, et Uranus.
- **Contrôle de visibilité** : Cases à cocher pour afficher ou masquer chaque planète individuellement.
- **Animation** : Orbites animées pour chaque planète autour du Soleil.

## Structure des fichiers

Le projet est structuré comme suit :
```bash
/
|-- index.html
|-- styles.css
|-- styles.scss
|-- app.js
|-- README.md
```

## Installation

Pour utiliser ce projet :

1. Clonez ou téléchargez le dépôt.
2. Assurez-vous que tous les fichiers (`index.html`, `styles.css`, `app.js`) sont dans le même répertoire.
3. Ouvrez `index.html` dans votre navigateur pour voir la visualisation.

## Utilisation

1. **Ouverture du fichier** : Ouvrez `index.html` dans votre navigateur préféré.
2. **Interaction** : Utilisez les cases à cocher à gauche pour afficher ou masquer les planètes dans la visualisation.

## Détails des fichiers

### `index.html`

Fichier principal contenant la structure HTML du projet. Il inclut :

- La structure de contrôle (cases à cocher pour les planètes).
- Les éléments de visualisation du système solaire.

### `styles.css`

Contient les styles CSS pour l'affichage :

- Styles des planètes et du Soleil.
- Positions et tailles (approximatives) des orbites.
- Apparence des contrôles.

### `styles.scss`

Contient les styles SCSS pour l'affichage :

- Fichier permettant de créer le css plus rapidement.

### `app.js`

Script JavaScript pour gérer les interactions :

- Affichage et masquage des planètes en fonction des cases à cocher.
- Dynamique de l'animation (si applicable).

## Limitations

- **Échelle** : Les distances et tailles ne sont pas totalement à l'échelle pour simplifier la visualisation.
- **Simplification** : Certaines caractéristiques physiques des planètes et de leurs orbites ont été simplifiées.

## Améliorations possibles

- **Mise à l'échelle** : Adapter les tailles et distances des planètes pour une représentation plus réaliste.
- **Animations avancées** : Ajouter des animations plus réalistes pour les orbites et rotations des planètes.
- **Synchronisation** : Synchroniser le mouvement des planètes avec celui existant.
- **Détails des lunes** : Ajouter des lunes pour d'autres planètes ou plus de détails pour celles déjà présentes.


