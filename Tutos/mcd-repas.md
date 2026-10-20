## 1. Entité CLIENT

| Code donnée | Désignation | Type |
|---|---|---|
| **#code_client** | Identifiant du client | Texte |
| nom_client | Nom du client | Texte |
| prenom_client | Prénom du client | Texte |
| telephone_client | Téléphone du client | Texte |
| email_client | Adresse e-mail du client | Texte |

## 2. Entité REPAS

| Code donnée | Désignation | Type |
|---|---|---|
| **#code_repas** | Identifiant du repas | Texte |
| nom_repas | Nom du repas | Texte |
| description_repas | Description du repas | Texte |
| prix_repas | Prix habituel du repas | Décimal |
| categorie_repas | Catégorie du repas | Texte |

## 3. Entité COMMANDE

| Code donnée | Désignation | Type |
|---|---|---|
| **#code_commande** | Identifiant de la commande | Texte |
| date_commande | Date de la commande | Date |
| heure_commande | Heure de la commande | Heure |
| statut_commande | État de la commande | Texte |

## 4. Association PASSER

| Entité 1 | Cardinalité | Association | Cardinalité | Entité 2 |
|---|---|---|---|---|
| CLIENT | (0,N) | PASSER | (1,1) | COMMANDE |

Un client peut passer plusieurs commandes. Chaque commande appartient à un seul client.

## 5. Association CONTENIR

| Entité 1 | Cardinalité | Association | Cardinalité | Entité 2 |
|---|---|---|---|---|
| COMMANDE | (1,N) | CONTENIR | (0,N) | REPAS |

### Attributs de l'association CONTENIR

| Code donnée | Désignation | Type |
|---|---|---|
| quantite_commandee | Quantité commandée | Entier |
| prix_unitaire_commande | Prix appliqué au repas lors de la commande | Décimal |

Une commande contient un ou plusieurs repas. Un repas peut apparaître dans plusieurs commandes.

## 6. Validation du MCD

| Vérification | Résultat attendu |
|---|---|
| Entité CLIENT | Identifiant et données du client présents |
| Entité REPAS | Identifiant et données du repas présents |
| Entité COMMANDE | Identifiant et données de la commande présents |
| Association PASSER | Un client peut passer plusieurs commandes |
| Association CONTENIR | Une commande peut contenir plusieurs repas |
| Attributs de CONTENIR | `quantite_commandee` et `prix_unitaire_commande` présents |