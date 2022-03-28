import "./style.css";
import { Todo, TodoList } from "./class/index.js";
import { crearTodoHtml } from "./js/componentes";

//instancia de la clase
export const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  crearTodoHtml(todo);
});

console.log(todoList.todos);
