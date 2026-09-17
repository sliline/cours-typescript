function isPalindrome(texte: string): boolean {
  texte = texte.toLowerCase();
  texte = texte.replaceAll(" ", "");

  let inverse = "";

  for (let i = texte.length - 1; i >= 0; i--) {
    inverse = inverse + texte[i];
  }

  return texte === inverse;
}

console.assert(
  isPalindrome("Kayak") === true,
  "Kayak devrait être un palindrome",
);

console.assert(
  isPalindrome("bonjour") === false,
  "bonjour ne devrait pas être un palindrome",
);
