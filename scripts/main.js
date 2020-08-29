import Modal from './modal.js';
import initCard from "./card.js";

function main() {
  const button = document.querySelector(".js_add_pet");
  button.onclick = function () {
    const modalOne = new Modal(document.querySelector(".js_modal_1"), {
      accept: function () {
        initCard(modalOne);
      },
      cancel: function () {
        console.log("cancelar!!");
      },
    });
    modalOne.open();
  };
}

main();











