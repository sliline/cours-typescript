function wordCount(texte: string): Record<string, number> {
    let mots = texte.trim().split(/\s+/);
    let resultat: Record<string, number> = {};

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
console.assert(
JSON.stringify(wordCount("le chat")) ===
JSON.stringify({ le: 1, chat: 1 }),
"wordCount doit gérer les espaces multiples"
);