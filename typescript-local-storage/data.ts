/* exported todos, writeTodos, readTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJson = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJson);
}

function readTodos(): Todo[] {
  const newTodos = localStorage.getItem('todos-storage');
  if (newTodos) {
    return JSON.parse(newTodos);
  } else {
    return [];
  }
}
