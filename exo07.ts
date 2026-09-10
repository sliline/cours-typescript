function evenDoubled(tableau: number[]): number[] {
    let resultat: number[] = [];

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            resultat.push(tableau[i] * 2);
        }
    }

    return resultat;
}

function evenDoubled2(tableau: number[]): number[] {
    return tableau
        .filter(nombre => nombre % 2 === 0)
        .map(nombre => nombre * 2);
}

console.assert(
    JSON.stringify(evenDoubled([1, 2, 3, 4])) === JSON.stringify([4, 8]),
    "version boucle incorrecte"
);

console.assert(
    JSON.stringify(evenDoubled2([1, 2, 3, 4])) === JSON.stringify([4, 8]),
    "version filter/map incorrecte"
);