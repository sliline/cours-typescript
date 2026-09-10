function chunk(tableau, taille) {
    let resultat = [];

    for (let i = 0; i < tableau.length; i += taille) {
        resultat.push(tableau.slice(i, i + taille));
    }

    return resultat;
}

console.assert(
    JSON.stringify(chunk([1, 2, 3, 4, 5], 2)) ===
    JSON.stringify([[1, 2], [3, 4], [5]]),
    "chunk incorrect"
);

console.assert(
    JSON.stringify(chunk([1, 2, 3], 1)) ===
    JSON.stringify([[1], [2], [3]]),
    "chunk taille 1 incorrect"
);