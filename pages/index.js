import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.querySelector(".popup__form");

const counter = new TodoCounter({
  listSelector: ".todos__list",
  counterSelector: ".counter__text",
});

counter.setEventListeners();

const todoFormValidator = new FormValidator(validationConfig, addTodoForm);
todoFormValidator._enableValidation();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", () => counter.update());
  return todo.getView();
};

const handleFormSubmit = (formValues) => {
  const name = formValues.name;
  const dateInput = formValues.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };

  const todo = generateTodo(values);
  section.addItem(todo);
  counter.update();

  addTodoForm.reset();
  todoFormValidator.resetValidation();
};

const popupWithForm = new PopupWithForm("#add-todo-popup", handleFormSubmit);

initialTodos[0].completed = true;

const section = new Section({
  items: initialTodos,
  renderer: generateTodo,
  containerSelector: ".todos__list",
});

section.renderItems();
counter.update();

popupWithForm.setEventListeners();

addTodoButton.addEventListener("click", () => popupWithForm.open());
