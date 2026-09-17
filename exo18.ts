interface Todo {
    id: number;
    text: string;
    done: boolean;
}

type Filter = "all" | "done" | "todo";

const todo = todos.find(todo => todo.id === id);


function add(text: string): void {
    todos.push({
        id: nextId,
        text: text,
        done: false
    });
    nextId++;
}

function remove(id: number): void {
    todos = todos.filter(todo => todo.id !== id);
}

function toggle(id: number): void {
    let todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.done = !todo.done;
    }
}

function list(filter: Filter = "all"): Todo[] {
    if (filter === "done") {
        return todos.filter(todo => todo.done);
    }

    if (filter === "todo") {
        return todos.filter(todo => !todo.done);
    }

    return todos;
}

// Tests
add("Faire les courses");
add("Réviser TypeScript");

toggle(1);

console.assert(list("done").length === 1, "Il devrait y avoir 1 todo terminé");
console.assert(list("todo").length === 1, "Il devrait rester 1 todo à faire");

remove(1);

console.assert(list().length === 1, "Il devrait rester 1 todo");

// Test volontaire demandé par le tuteur :
// décommente cette ligne pour voir l'erreur TypeScript
//list("finished");
add("Nouvelle tâche");

console.assert(
list()[0].id === 2 && list()[1].id === 3,
"Les IDs doivent rester uniques après une suppression"
);