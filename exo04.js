function max(tableau) {

    let maximum = tableau[0];

    for (let i = 1; i < tableau.length; i++) {

        if (tableau[i] > maximum) {
            maximum = tableau[i];
        }

    }
return maximum;
}

console.assert(max([3, 9, 2]) === 9, "max devrait retourner 9");
