# Cours de Mathématiques

Un projet Frontend de création d'une interface pour le cours de Mathématiques de niveau universitaire du site [unisciel.fr](https://www.unisciel.fr/).

Ce projet se découpe en deux phases:

- Création d'une application CRUD basique pour alimenter un fichier de données au format json.
- Création d'une interface de type roadmap pour le cours de Mathématiques unisciel.

Le stack technique de ce projet sera le trio HTML, CSS et JS. Pas d'utilisation d'un framework JS à part Bootstrap. Il s'agit d'apprendre à manipuler une structure de données JSON, et le DOM.

## Application CRUD

L'objectif de cette phase est de créer le MVP d'une application CRUD qui permettra de créer le fichier de données (au format JSON) utilisé dans la seconde phase du projet.

### User Stories :

Les user stories suivantes couvrent toutes les fonctionnalités de base d'une application CRUD : la création (Create), la lecture (Read), la mise à jour (Update) et la suppression (Delete) de données.

1. En tant qu'utilisateur, je veux pouvoir voir toutes les données stockées afin de comprendre rapidement l'ensemble des informations disponibles.

    * L'application affiche un tableau avec toutes les données stockées à chaque chargement de la page.

2. En tant qu'utilisateur, je veux pouvoir ajouter de nouvelles données afin de compléter l'ensemble des informations.

    * L'application fournit un formulaire pour entrer de nouvelles données.
    * Lorsque l'utilisateur soumet le formulaire, les nouvelles données sont ajoutées à la fin du tableau et stockées de manière persistante.

3. En tant qu'utilisateur, je veux pouvoir modifier les données existantes afin de corriger les erreurs ou de mettre à jour les informations.

    * L'application fournit un bouton "Modifier" pour chaque ligne de données.
    * Lorsque l'utilisateur clique sur le bouton "Modifier", les données correspondantes sont chargées dans le formulaire pour modification.
    * Lorsque l'utilisateur soumet le formulaire, les données modifiées remplacent les anciennes données dans le tableau et sont stockées de manière persistante.

4. En tant qu'utilisateur, je veux pouvoir supprimer les données existantes afin de garder l'ensemble des informations pertinentes et à jour.

    * L'application fournit un bouton "Supprimer" pour chaque ligne de données.
    * Lorsque l'utilisateur clique sur le bouton "Supprimer", les données correspondantes sont supprimées du tableau et de manière persistante.

