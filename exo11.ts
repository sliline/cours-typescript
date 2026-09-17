function chunk<T>(tableau: T[], taille: number): T[][] {
  let resultat: T[][] = [];

  for (let i = 0; i < tableau.length; i += taille) {
    resultat.push(tableau.slice(i, i + taille));
  }

  return resultat;
}

console.assert(
  JSON.stringify(chunk([1, 2, 3, 4, 5], 2)) ===
    JSON.stringify([[1, 2], [3, 4], [5]]),
  "chunk incorrect",
);

console.assert(
  JSON.stringify(chunk(["a", "b", "c"], 2)) ===
    JSON.stringify([["a", "b"], ["c"]]),
  "chunk avec des chaînes incorrect",
);
