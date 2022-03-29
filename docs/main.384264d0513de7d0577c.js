/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ todoList)
});

;// CONCATENATED MODULE: ./src/class/todo.class.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo(tarea) {
    _classCallCheck(this, Todo);

    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }

  _createClass(Todo, [{
    key: "imprimirClase",
    value: function imprimirClase() {
      console.log("".concat(this.tarea, " - ").concat(this.id));
    }
  }], [{
    key: "fromJson",
    value: function fromJson(_ref) {
      var tarea = _ref.tarea,
          id = _ref.id,
          completado = _ref.completado,
          creado = _ref.creado;
      var tempTodo = new Todo(tarea);
      tempTodo.id = id;
      tempTodo.completado = completado;
      tempTodo.creado = creado;
      return tempTodo;
    }
  }]);

  return Todo;
}();
;// CONCATENATED MODULE: ./src/class/todo-list.class.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function todo_list_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo_list_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function todo_list_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) todo_list_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) todo_list_class_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    todo_list_class_classCallCheck(this, TodoList);

    this.cargarLocalStorage();
  } //para agregar un todo al arreglo de TODOS


  todo_list_class_createClass(TodoList, [{
    key: "nuevoTodo",
    value: function nuevoTodo(todo) {
      this.todos.push(todo);
      this.guardarLocalStorage();
    } //Eliminar todo

  }, {
    key: "eliminarTodo",
    value: function eliminarTodo(id) {
      this.todos = this.todos.filter(function (todo) {
        return todo.id != id;
      });
      this.guardarLocalStorage();
    } //Marcar Completado

  }, {
    key: "marcarCompletado",
    value: function marcarCompletado(id) {
      var _iterator = _createForOfIteratorHelper(this.todos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var todo = _step.value;

          if (todo.id == id) {
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } //Borrar Completados

  }, {
    key: "eliminarCompletados",
    value: function eliminarCompletados() {
      this.todos = this.todos.filter(function (todo) {
        return !todo.completado;
      });
      this.guardarLocalStorage();
    }
  }, {
    key: "guardarLocalStorage",
    value: function guardarLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(this.todos));
    }
  }, {
    key: "cargarLocalStorage",
    value: function cargarLocalStorage() {
      this.todos = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []; //con este map transofrmamos los TODOS que vienen como un objeto del LOCALSTORAGE y con la propiedad estatica que creamos lo pasamos a una instancia

      this.todos = this.todos.map(function (obj) {
        return Todo.fromJson(obj);
      });
    }
  }]);

  return TodoList;
}();
;// CONCATENATED MODULE: ./src/js/componentes.js
function componentes_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = componentes_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function componentes_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return componentes_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return componentes_arrayLikeToArray(o, minLen); }

function componentes_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 //referencias al html

var divTodoList = document.querySelector(".todo-list");
var txtInput = document.querySelector(".new-todo");
var btnBorrar = document.querySelector(".clear-completed");
var ulFiltros = document.querySelector(".filters");
var anchorFiltros = document.querySelectorAll(".filtro");
var crearTodoHtml = function crearTodoHtml(todo) {
  var htmlTodo = "\n  <li class=\"".concat(todo.completado ? "completeded" : "", "\" data-id=\"").concat(todo.id, "\">\n    <div class=\"view\">\n      <input class=\"toggle\" type=\"checkbox\" ").concat(todo.completado ? "checked" : "", "  />\n      <label>").concat(todo.tarea, "</label>\n      <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\" />    \n  </li>\n  ");
  var div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.appendChild(div.firstElementChild);
  return div.firstElementChild;
}; //EVentos

txtInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && txtInput.value.length > 0) {
    var nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    txtInput.value = "";
  }
});
divTodoList.addEventListener("click", function (e) {
  var todoElemento = e.target.parentElement.parentElement;
  var todoId = todoElemento.getAttribute("data-id");

  if (e.target.localName === "input") {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (e.target.localName === "button") {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});
btnBorrar.addEventListener("click", function (e) {
  //todolist es para manipular el arreglo
  //divtodolist como su nombre lo dice, es el div para pintar en pantalla la lista
  todoList.eliminarCompletados();

  while (divTodoList.firstChild) {
    divTodoList.removeChild(divTodoList.firstChild);
  }

  todoList.todos.forEach(function (todo) {
    crearTodoHtml(todo);
  });
});
ulFiltros.addEventListener("click", function (e) {
  var filtro = e.target.text;

  if (!filtro) {
    return;
  }

  anchorFiltros.forEach(function (el) {
    return el.classList.remove("selected");
  });
  e.target.classList.add("selected"); // tambien podria recorrerlo asi pero es menos lineas de codigo
  // console.log(Object.values(divTodoList.children).forEach);

  var _iterator = componentes_createForOfIteratorHelper(divTodoList.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elemento = _step.value;
      elemento.classList.remove("hidden");
      var completado = elemento.classList.contains("completed");

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
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
;// CONCATENATED MODULE: ./src/index.js


 //instancia de la clase

var todoList = new TodoList();
todoList.todos.forEach(function (todo) {
  crearTodoHtml(todo);
});
console.log(todoList.todos);
/******/ })()
;