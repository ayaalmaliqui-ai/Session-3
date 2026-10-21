const prompt = require ("prompt-sync")();
let notes = [];
let taille = 5;
let somme = 0;

for (let i = 0; i < taille; i++) {
    notes[i] = Number(prompt("Entrer la note " + (i + 1) + " :"));
    somme = somme + notes[i];
}

let moyenne = somme / taille;

console.log("Les notes sont :", notes);
console.log("La moyenne de la class est :",moyenne);