function sortPeople(people) {
  return [...people].sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    }

    return a.name.localeCompare(b.name);
  });
}

console.assert(
  JSON.stringify(
    sortPeople([
      { name: "Lina", age: 22 },
      { name: "Adam", age: 20 },
      { name: "Sarah", age: 22 },
    ]),
  ) ===
    JSON.stringify([
      { name: "Adam", age: 20 },
      { name: "Lina", age: 22 },
      { name: "Sarah", age: 22 },
    ]),
  "tri incorrect",
);
