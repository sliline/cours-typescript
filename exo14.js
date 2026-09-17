function isAnagram(mot1, mot2) {
  let a = mot1.toLowerCase().split("").sort().join("");
  let b = mot2.toLowerCase().split("").sort().join("");

  return a === b;
}

console.assert(
  isAnagram("chien", "niche") === true,
  "chien et niche devraient être des anagrammes",
);

console.assert(
  isAnagram("chien", "chat") === false,
  "chien et chat ne devraient pas être des anagrammes",
);
