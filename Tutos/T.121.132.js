// Exe1 
let nombres = [10, 20, 30, 40];

console.log(nombres[0] + nombres[nombres.length - 1]);

//Exe 2
let temperatures = [18, 20, 23, 19];

console.log("Avant :", temperatures);

temperatures[1] = 21;
temperatures[temperatures.length - 1] = 25;

console.log("Après :", temperatures);

//Exe 3

let notes = [12, 8, 15, 9, 17];

// Modification de la deuxième note
notes[1] = 10;

// Modification de la quatrième note
notes[3] = 11;

// Lecture : notes[2] lit la valeur à l'index 2.
// Modification : notes[2] = 10 remplace cette valeur par 10.

console.log("Première note :", notes[0]);

console.log("Dernière note :", notes[notes.length - 1]);

console.log("Tableau final :", notes);

console.log("Nombre de notes :", notes.length);
