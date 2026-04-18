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

    const listTotal = allTodos.length;
    const listChecked = completedTodos.length;

    this._counter.textContent = `Showing ${listChecked} out of ${listTotal} completed`;
  }

  setEventListeners() {
    this._list.addEventListener("change", (evt) => {
      if (evt.target.classList.contains("todo__completed")) {
        this.update();
      }
    });
  }
}
