import { ModalWindow } from "./modal.js";

const newItemBtn = document.querySelector(".newItem");

newItemBtn.addEventListener("click", () => {
    const modalWindow = new ModalWindow();
    modalWindow.showModal();
    modalWindow.setCloseModalWindowFn();
    modalWindow.setAddToCartFn();
})
