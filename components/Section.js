export default class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(item) {
    document.querySelector(this._containerSelector).append(item);
  }

  renderItems() {
    this._items.forEach((element) => {
      const item = this._renderer(element);
      this.addItem(item);
    });
  }
}
