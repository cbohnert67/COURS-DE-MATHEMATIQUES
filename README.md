# Cours de Mathématiques

Un projet Frontend de création d'une interface 'roadmap' pour le cours de Mathématiques de niveau universitaire du site [unisciel.fr](https://www.unisciel.fr/).

Les modules [Université en ligne](https://uel.unisciel.fr/uel/co/contenu.html) sont disponibles gratuitement pour quiconque souhaite se former à la physique, la chimie, les mathématiques et la biologie de premier cycle universitaire.

L'objectif de ce projet est simple: **fournir une interface conviviale et esthétique aux 20 modules de mathématiques**.

Ce projet se découpe en deux phases:

- Création d'une application CRUD basique pour alimenter un fichier de données au format JSON.
- Création d'une interface de type roadmap pour le cours de Mathématiques.

Le stack technique de ce projet sera le trio HTML, CSS et JS. Pas d'utilisation d'un framework JS à part Bootstrap. Il s'agit d'apprendre à manipuler une structure de données JSON, et le DOM.

## Application CRUD Tool

L'objectif de cette phase est de créer le MVP d'une application CRUD qui permettra de créer et d'exporter le fichier de données (au format JSON) utilisé dans la seconde phase du projet.

### User Stories

Les user stories suivantes couvrent toutes les fonctionnalités de base d'une application CRUD : la création (Create), la lecture (Read), la mise à jour (Update) et la suppression (Delete) de données.

1. En tant qu'utilisateur, je veux pouvoir voir toutes les données stockées afin de comprendre rapidement l'ensemble des informations disponibles.

    - L'application affiche un tableau avec toutes les données stockées à chaque chargement de la page.

2. En tant qu'utilisateur, je veux pouvoir ajouter de nouvelles données afin de compléter l'ensemble des informations.

    - L'application fournit un formulaire pour entrer de nouvelles données.
    - Lorsque l'utilisateur soumet le formulaire, les nouvelles données sont ajoutées à la fin du tableau et stockées de manière persistante.

3. En tant qu'utilisateur, je veux pouvoir modifier les données existantes afin de corriger les erreurs ou de mettre à jour les informations.

    - L'application fournit un bouton "Modifier" pour chaque ligne de données.
    - Lorsque l'utilisateur clique sur le bouton "Modifier", les données correspondantes sont chargées dans le formulaire pour modification.
    - Lorsque l'utilisateur soumet le formulaire, les données modifiées remplacent les anciennes données dans le tableau et sont stockées de manière persistante.

4. En tant qu'utilisateur, je veux pouvoir supprimer les données existantes afin de garder l'ensemble des informations pertinentes et à jour.

    - L'application fournit un bouton "Supprimer" pour chaque ligne de données.
    - Lorsque l'utilisateur clique sur le bouton "Supprimer", les données correspondantes sont supprimées du tableau et de manière persistante.

### Avancement

La version 0.1 de CRUD Tool est créée et disponible.

## Interface Roadmap

L'objectif de cette seconde phase est de créer le MVP de l'interface Roadmap du cours de Mathématiques. Il s'agit d'une générateur statique alimenté par le fichier JSON créé lors de la première phase.

### User Stories

Les user stories suivantes couvrent les fonctionnalités de base d'une application qui crée une interface frontend à partir d'un fichier de données au format JSON.

1. En tant qu'utilisateur, je veux pouvoir charger un fichier JSON afin que l'application puisse utiliser ces données.

    - L'application fournit un moyen pour l'utilisateur de sélectionner et de charger un fichier JSON depuis son système de fichiers local.

2. En tant qu'utilisateur, je veux voir les données du fichier JSON affichées dans une interface utilisateur conviviale afin que je puisse facilement comprendre et interagir avec les données.

    - Après le chargement du fichier JSON, l'application analyse les données et les affiche dans une interface utilisateur conviviale, par exemple sous forme de tableau ou de liste.

3. En tant qu'utilisateur, je veux pouvoir filtrer et trier les données affichées afin de trouver facilement les informations qui m'intéressent.

    - L'application fournit des options pour filtrer et trier les données affichées en fonction de différents critères.

### Avancement

0%
