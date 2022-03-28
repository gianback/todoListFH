import { Todo, TodoList } from "../class";
import { todoList } from "../index";

//referencias al html
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchorFiltros = document.querySelectorAll(".filtro");

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
  <li class="${todo.completado ? "completeded" : ""}" data-id="${todo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${
        todo.completado ? "checked" : ""
      }  />
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />    
  </li>
  `;
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.appendChild(div.firstElementChild);

  return div.firstElementChild;
};

//EVentos
txtInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && txtInput.value.length > 0) {
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);

    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (e) => {
  const todoElemento = e.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  if (e.target.localName === "input") {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (e.target.localName === "button") {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});

btnBorrar.addEventListener("click", (e) => {
  //todolist es para manipular el arreglo
  //divtodolist como su nombre lo dice, es el div para pintar en pantalla la lista
  todoList.eliminarCompletados();

  while (divTodoList.firstChild) {
    divTodoList.removeChild(divTodoList.firstChild);
  }

  todoList.todos.forEach((todo) => {
    crearTodoHtml(todo);
  });
});

ulFiltros.addEventListener("click", (e) => {
  const filtro = e.target.text;
  if (!filtro) {
    return;
  }

  anchorFiltros.forEach((el) => el.classList.remove("selected"));
  e.target.classList.add("selected");

  // tambien podria recorrerlo asi pero es menos lineas de codigo
  // console.log(Object.values(divTodoList.children).forEach);
  for (const elemento of divTodoList.children) {
    elemento.classList.remove("hidden");

    const completado = elemento.classList.contains("completed");

    switch (filtro) {
      case "Pendientes":
        if (completado) {
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});
