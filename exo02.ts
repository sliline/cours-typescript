function reverse(texte: string): string {

    let resultat = "";

    for (let i = texte.length - 1; i >= 0; i--) {
        resultat = resultat + texte[i];
    }

    return resultat;
}

console.assert(reverse("hello") === "olleh", "reverse hello");