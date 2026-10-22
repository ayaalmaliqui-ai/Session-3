//exe 1
let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];

let recherche = "Nadia";
let position = -1;

for (let i = 0; i < prenoms.length; i++) {
    if (prenoms[i] === recherche) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log(recherche + " se trouve à l'index " + position);
} else {
    console.log("Prénom introuvable");
}
//exe2 
