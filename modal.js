
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

    getCloseBtnElement(){
        return this.#closeBtn;
    }

    getAddBtnElemen(){
        return this.#addBtn;
    }

    showModal(){
       this.#container.style.display = "block";
       this.#inputName.value = "";
       this.#inputPrice.value = "";
    }

    closeModalWindow(){
        this.#container.style.display = "none";
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
            console.log("No has puesto nada en nombre");
            return false
        }

        if(isNaN(price)){
            console.log("No has puesto el precio");
            return false
        }

        return true
    }

}