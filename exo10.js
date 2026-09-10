function unique(tableau) {
    let resultat = [];

    for (let i = 0; i < tableau.length; i++) {
        if (!resultat.includes(tableau[i])) {
            resultat.push(tableau[i]);
        }
    }

    return resultat;
}

console.assert(
    JSON.stringify(unique([1, 1, 2, 3, 3])) === JSON.stringify([1, 2, 3]),
    "unique incorrect"
);

console.assert(
    JSON.stringify(unique([])) === JSON.stringify([]),
    "un tableau vide devrait retourner []"
);