function countVowels(texte: string): number {

    let compteur = 0;
    let voyelles = "aeiouy";

    for (let i = 0; i < texte.length; i++) {

        if (voyelles.includes(texte[i].toLowerCase())) {
            compteur++;
        }

    }

    return compteur;
}

console.assert(
    countVowels("bonjour") === 3,
    "bonjour devrait avoir 3 voyelles"
);

console.assert(
    countVowels("") === 0,
    "une chaîne vide devrait avoir 0 voyelle"
);