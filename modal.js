import { Item } from "./item.js"

export class ModalWindow{
    #container;
    #closeBtn;
    #inputName;
    #inputPrice;
    #addBtn;

    constructor(){
        this.#container = document.querySelector(".modalWindow-container");
        this.#closeBtn = document.querySelector(".closeBtn i");
        this.#inputName = document.querySelector(".name");
        this.#inputPrice = document.querySelector(".price");
        this.#addBtn = document.querySelector(".addBtn");
    }

    showModal(){
       this.#container.style.display = "block";
       this.#inputName.value = "";
       this.#inputPrice.value = "";
    }

    setCloseModalWindowFn(){
        this.#closeBtn.addEventListener("click", () => {
            this.#container.style.display = "none";
        })
    }

    setAddToCartFn(){
        this.#addBtn.addEventListener("click", () => {
            const data = this.getData()
            console.log(data)
        })
    }

    getData(){
        let name = String(this.#inputName.value).trim();
        let price = parseFloat(this.#inputPrice.value);
        
        if(this.validaData(name, price)){
            return {
                name: this.#inputName.value,
                price: this.#inputPrice.value,
            }
        } else {
            return null
        }
    }

    validaData(name, price){
        if(name === ""){
            return false
        }

        if(isNaN(price)){
            return false
        }

        return true
    }
    
    

    

}