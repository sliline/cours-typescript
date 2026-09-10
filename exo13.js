function groupBy(users, propriete) {
    let resultat = {};

    for (let i = 0; i < users.length; i++) {
        let valeur = users[i][propriete];

        if (!resultat[valeur]) {
            resultat[valeur] = [];
        }

        resultat[valeur].push(users[i]);
    }

    return resultat;
}

console.assert(
    JSON.stringify(
        groupBy([
            { name: "Lina", role: "admin" },
            { name: "Adam", role: "user" },
            { name: "Sarah", role: "admin" }
        ], "role")
    ) === JSON.stringify({
        admin: [
            { name: "Lina", role: "admin" },
            { name: "Sarah", role: "admin" }
        ],
        user: [
            { name: "Adam", role: "user" }
        ]
    }),
    "groupBy incorrect"
);