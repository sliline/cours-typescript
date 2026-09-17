function unique<T>(tableau: T[]): T[] {
  let resultat: T[] = [];

  for (let i = 0; i < tableau.length; i++) {
    if (!resultat.includes(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }

  return resultat;
}

function uniqueAvecSet<T>(tableau: T[]): T[] {
  return [...new Set(tableau)];
}

console.assert(
  JSON.stringify(unique([1, 1, 2, 3, 3])) === JSON.stringify([1, 2, 3]),
  "version boucle incorrecte",
);

console.assert(
  JSON.stringify(uniqueAvecSet([1, 1, 2, 3, 3])) === JSON.stringify([1, 2, 3]),
  "version Set incorrecte",
);
