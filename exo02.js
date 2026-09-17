function reverse(texte) {
  let resultat = "";

  for (let i = texte.length - 1; i >= 0; i--) {
    resultat = resultat + texte[i];
  }
  return resultat;
}
console.assert(reverse("hello") === "olleh", "reverse hello");

function reverseAvecReverse(texte) {
  return texte.split("").reverse().join("");
}
console.assert(reverseAvecReverse("hello") === "olleh", "reverse avec reverse");
