let todos = [];

function add(text) {
    todos.push({
        id: todos.length + 1,
        text: text,
        done: false
    });
}

function remove(id) {
    todos = todos.filter(todo => todo.id !== id);
}

function toggle(id) {
    let todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.done = !todo.done;
    }
}

function list(filter = "all") {
    if (filter === "done") {
        return todos.filter(todo => todo.done);
    }

    if (filter === "todo") {
        return todos.filter(todo => !todo.done);
    }

    return todos;
}

add("Réviser JavaScript");
add("Faire du TypeScript");

console.assert(list().length === 2, "il devrait y avoir 2 tâches");
console.assert(list("todo").length === 2, "il devrait y avoir 2 tâches non terminées");

toggle(1);

console.assert(list("done").length === 1, "il devrait y avoir 1 tâche terminée");
console.assert(list("todo").length === 1, "il devrait rester 1 tâche à faire");

remove(1);

console.assert(list().length === 1, "il devrait rester 1 tâche");