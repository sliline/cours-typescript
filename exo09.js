function wordCount(texte) {
    let mots = texte.split(" ");
    let resultat = {};

    for (let i = 0; i < mots.length; i++) {
        let mot = mots[i];

        if (resultat[mot]) {
            resultat[mot]++;
        } else {
            resultat[mot] = 1;
        }
    }

    return resultat;
}

console.assert(
    JSON.stringify(wordCount("le chat et le chien")) ===
    JSON.stringify({ le: 2, chat: 1, et: 1, chien: 1 }),
    "wordCount incorrect"
);

console.assert(
    JSON.stringify(wordCount("chat chat")) ===
    JSON.stringify({ chat: 2 }),
    "chat devrait apparaître 2 fois"
);