let produits = ["Clavier", "Souris", "Écran", "Casque"];
let prix = [150, 80, 1200, 250];
let stocks = [10, 0, 5, 3];
let valeurTotale = 0;
let indexMax = 0;

console.log("=== Tous les produits ===");

for (let i = 0; i < produits.length; i++) {
    console.log(produits[i] + " => " + prix[i] + " dhs => " + stocks[i] + " en stock");
}

console.log("=== Stock nul ===");

for (let i = 0; i < produits.length; i++) {
    if (stocks[i] === 0) {
        console.log(produits[i]);
    }
}

for (let i = 0; i < produits.length; i++) {
    valeurTotale += prix[i] * stocks[i];
}

console.log("Valeur totale du stock :", valeurTotale, "dhs");

for (let i = 1; i < prix.length; i++) {
    if (prix[i] > prix[indexMax]) {
        indexMax = i;
    }
}

console.log("Produit le plus cher :", produits[indexMax]);
console.log("=== Stock inférieur à 5 ===");

for (let i = 0; i < produits.length; i++) {
    if (stocks[i] < 5) {
        console.log(produits[i]);
    }
}
