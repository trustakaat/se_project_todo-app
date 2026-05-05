export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
  }

  close() {
    this._popupSelector.classList.remove("popup_visible");
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupSelector
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });

    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target === this._popupSelector) {
        this.close();
      }
    });

    document.addEventListener("keydown", this._handleEscapeClose);
  }
}
