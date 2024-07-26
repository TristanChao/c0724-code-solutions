'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJson = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJson);
}
function readTodos() {
  const newTodos = localStorage.getItem('todos-storage');
  if (newTodos) {
    return JSON.parse(newTodos);
  } else {
    return [];
  }
}
