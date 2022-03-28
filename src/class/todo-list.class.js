import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    this.cargarLocalStorage();
  }
  //para agregar un todo al arreglo de TODOS
  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }
  //Eliminar todo
  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  //Marcar Completado
  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  //Borrar Completados
  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    //con este map transofrmamos los TODOS que vienen como un objeto del LOCALSTORAGE y con la propiedad estatica que creamos lo pasamos a una instancia

    this.todos = this.todos.map((obj) => Todo.fromJson(obj));
  }
}
