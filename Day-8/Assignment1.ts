interface ToDo {
    name: string;
    description: string;
    done: boolean;
}

const todos: ToDo[] = [];

function addTask(name: string, description: string): number {
    return todos.push({
        name: name,
        description: description,
        done: false,
    });
}

function remove(index: number): ToDo[] {
    return todos.splice(index, 1);
}

const list = (): void => {
    todos.forEach((todo: ToDo, index: number) => {
        console.log(index + " - " + todo.name);
    });
}

function update(index: number, name: string, description: string): ToDo {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}