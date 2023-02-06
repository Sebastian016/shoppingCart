import { ModalWindow } from "./modal.js";
import { Item } from "./item.js"
import { ShoppingCart } from "./cart.js";

const newItemBtn = document.querySelector(".newItem");
const cartBtn = document.querySelector(".shoppingCart-btn");

const modalWindow = new ModalWindow();
const shoppingCart = new ShoppingCart();

const closeBtn = modalWindow.getCloseBtnElement();
const addToCartBtn = modalWindow.getAddBtnElemen();

newItemBtn.addEventListener("click", () => modalWindow.showModal() );

closeBtn.addEventListener("click", () => modalWindow.closeModalWindow() );

addToCartBtn.addEventListener("click", () => {
    const data = modalWindow.getData();
    const item = new Item();
    item.setName(data.name);
    item.setPrice(data.price)
    shoppingCart.addItem(item);
});

cartBtn.addEventListener("click", () => {
    shoppingCart.show();
})

