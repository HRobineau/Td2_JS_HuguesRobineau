# TP JavaScript

Hugues ROBINEAU
License PRO - IUT Nantes
17 Novembre 2013

# Exercice 2 - [Web Crawler](http://fr.wikipedia.org/wiki/WebCrawler)

## Prérequis

- Il faut au préalable avoir installé nodejs, npm et mongodb
- Installation de [mongodb](http://fr.wikipedia.org/wiki/WebCrawler)
- placer le repertoire de mongodb dans webcrawler/
- Il n'est pas nécessaire de re-télécharger les différents modules

## Fonctionnement

- Pour lancer l'application placer vous dans le répertoire webcrawler/
- il faut lancer mongodb :

		./mongodb/bin/mongod

- Pour démarrer l'application :

		nodejs scraper.js

- Rendez-vous sur : [http://localhost:8080/scraper](http://localhost:8080/scraper)

- Entrez l'url à parcourir dans le champs prévu à cet effet
- Validez
-- PETIT INCONVENIENT -- il faut redémarrer l'application scraper.js pour que le boutton afficher soit efficace (l'explication de ce problème se situe dans webcrawler/issue.txt)




## Evolutions

Les évolutions à apporter pourraient-être les suivantes :
  - Différents statistiques sur les liens récupéré
  - Faire fonctionner correctement l'affichage
  - Adapter ce systèmes en remplaçant l'expression régulière pour les liens par une pour les images
  - Mettre en place un timeout (le crawler se bloque sur certaines sites)
