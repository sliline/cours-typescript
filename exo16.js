function binarySearch(tableau, cible) {
    let debut = 0;
    let fin = tableau.length - 1;

    while (debut <= fin) {
        let milieu = Math.floor((debut + fin) / 2);

        if (tableau[milieu] === cible) {
            return milieu;
        }

        if (tableau[milieu] < cible) {
            debut = milieu + 1;
        } else {
            fin = milieu - 1;
        }
    }

    return -1;
}

console.assert(
    binarySearch([1, 3, 5, 7, 9], 7) === 3,
    "7 devrait être trouvé à l'index 3"
);

console.assert(
    binarySearch([1, 3, 5, 7, 9], 4) === -1,
    "4 ne devrait pas être trouvé"
);