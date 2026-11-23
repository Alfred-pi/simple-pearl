# Patrons 31 × 31

Cinq exemples éditables au format natif Simple Pearl, préparés pour une plaque de
31 lignes et 31 colonnes. Les PNG sont rendus directement depuis les cellules et
les couleurs des fichiers JSON, avec coordonnées et quantités par couleur.

| Motif | Projet | Aperçu | Perles | Cases vides | Couleurs |
|---|---|---|---:|---:|---:|
| Pikachu, personnage entier | [JSON](pikachu-31.json) | [PNG](pikachu-31.png) | 417 | 544 | 7 |
| Bowser, portrait | [JSON](bowser-31.json) | [PNG](bowser-31.png) | 560 | 401 | 8 |
| Méga-Dracaufeu X, en vol (31 × 27) | [JSON](mega-dracaufeu-x-31.json) | [PNG](mega-dracaufeu-x-31.png) | 547 | 414 | 8 |
| Mewtwo, personnage entier (20 × 23) | [JSON](mewtwo-31.json) | [PNG](mewtwo-31.png) | 284 | 677 | 6 |
| Grand Mewtwo, debout (réduit de 32 × 42) | [JSON](grand-mewtwo-31.json) | [PNG](grand-mewtwo-31.png) | 363 | 598 | 7 |

- Chaque fichier contient exactement 961 cellules et 961 états de progression,
  tous initialement non cochés. Le bord extérieur est entièrement vide, sauf
  pour Méga-Dracaufeu X qui occupe les 31 colonnes.
- Une cellule `null` signifie **aucune perle**. Le fond blanc de la page PNG et
  les petits repères gris des cases vides sont seulement des aides de lecture.
  Les perles blanches/crème du personnage sont des couleurs explicites.
- Les palettes sont descriptives, sans correspondance garantie avec une marque
  de perles. Les quantités se calculent sur les cellules non nulles du JSON.
- Ouvrir ou télécharger ces fichiers ne modifie pas le motif du navigateur.
  Pour essayer un exemple, utiliser une fenêtre privée dédiée, puis **Importer
  un fichier JSON**. Pour importer dans une session existante, exporter d'abord
  le motif courant : l'application sauvegarde automatiquement le motif importé.
- Les fichiers sont des exemples personnels de personnages existants, pas des
  modèles officiels.
- Méga-Dracaufeu X et Mewtwo reprennent des pixel art existants, une perle par
  pixel, sans rééchantillonnage : l'icône 32 × 32 du projet communautaire
  pokeemerald-expansion (rognée d'une colonne sur la queue et recolorée en
  bleu) et la grille 20 × 23 fournie par Monsieur. Le fond est retiré. Dans
  leurs PNG, les cases vides sont beiges pour distinguer les perles blanches.
- Grand Mewtwo vient de l'icône 32 × 42 du jeu de sprites PokéSprite, trop
  grande pour la plaque : ses 31 cases sont une réduction faite par
  l'application, et le dessin d'origine reste dans `master` (plaque 49).

## Plaque 18 × 18

Quatorze Pokémon en 16 × 16, une perle par pixel, bord vide d'une case :
`<nom>-18.json` (Pikachu, Salamèche, Bulbizarre, Carapuce, Dracaufeu, Mewtwo,
Évoli, Ronflex, Mew, Rondoudou, Psykokwak, Dracolosse, Lokhlass, Miaouss).
Ils viennent des icônes de style Game Boy du projet communautaire Polished
Crystal (deux tons et un contour), colorisées ici avec trois ou quatre couleurs
de perles. Pas de PNG pour ceux-ci : l'application imprime le patron.

Six personnages originaux, dessinés pour l'application, une perle par pixel,
même bord vide : Dragonnet, Flammèche, Chat ninja, Fantôme, Robot, Œuf mystère
(`dragonnet-18.json`, `flammeche-18.json`, `chat-ninja-18.json`,
`fantome-18.json`, `robot-18.json`, `oeuf-mystere-18.json`).
