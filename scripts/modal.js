function Modal(element, objCb = {}) {
  this.element = element;
  this.xClose = this.element.querySelector(".js_x_close");
  this.buttonAccept = this.element.querySelector(".js_button_accept");
  this.buttonACancel = this.element.querySelector(".js_button_cancel");

  this.xClose.onclick = () => {
    this.close();
  };

  this.buttonAccept.onclick = () => {
    objCb.accept()
    // this.close();
  };

  this.buttonACancel.onclick = () => {
    objCb.cancel()
    // this.close();
  };
}

Modal.prototype.open = function () {
  this.element.classList.add("is-open");
};

Modal.prototype.close = function () {
  this.element.classList.remove("is-open");
};

export default Modal;