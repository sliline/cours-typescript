function max(tableau: number[]): number | undefined {

if (tableau.length === 0) {
    return undefined;
}

let maximum = tableau[0];

for (let i = 1; i < tableau.length; i++) {

    if (tableau[i] > maximum) {
        maximum = tableau[i];
    }

}

return maximum;

}