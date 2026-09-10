function sum(tableau) {
    return tableau.reduce((total, nombre) => total + nombre, 0);
}

console.assert(sum([1, 2, 3]) === 6, "1 + 2 + 3 devrait donner 6");
console.assert(sum([]) === 0, "un tableau vide devrait donner 0");