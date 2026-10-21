// Exe 1
let mots = ["chat", "ordinateur", "table", "programmation", "js"];

let motsLongs = 0;

for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > 5) {
        motsLongs++;
    }
}

console.log("Nombre de mots longs :", motsLongs);

// Exe2 
let nombres = [4, 7, 2, 9, 5, 8];

let sommePairs = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        sommePairs = sommePairs + nombres[i];
    }
}

console.log("Somme des nombres pairs :", sommePairs);

//Exe 3 

let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let nombreArticlesChers = 0;
let montantArticlesChers = 0;

/*
La variable somme doit être déclarée avant la boucle
pour conserver le total et l'accumuler à chaque tour.
*/

for (let i = 0; i < panier.length; i++) {
    // Additionner tous les prix
    somme = somme + panier[i];

    // Vérifier si l'article est cher
    if (panier[i] >= 20) {
        nombreArticlesChers++;
        montantArticlesChers = montantArticlesChers + panier[i];
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nombreArticlesChers);
console.log("Montant des articles chers :", montantArticlesChers);
