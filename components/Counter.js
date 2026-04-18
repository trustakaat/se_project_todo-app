export default class Counter {
  constructor({ listSelector, counterSelector }) {
    this._list = document.querySelector(listSelector);
    this._counter = document.querySelector(counterSelector);
  }

  update() {
    const allTodos = this._list.querySelectorAll(".todo");
    const completedTodos = this._list.querySelectorAll(
      ".todo__completed:checked",
    );

    const Y = allTodos.length;
    const X = completedTodos.length;

    this._counter.textContent = `Showing ${X} out of ${Y} completed`;
  }

  setEventListeners() {
    this._list.addEventListener("change", (evt) => {
      if (evt.target.classList.contains("todo__completed")) {
        this.update();
      }
    });
  }
}
