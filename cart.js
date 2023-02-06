export class ShoppingCart{
    #items;
    constructor(){
        this.#items = [];
    }

    addItem(item){
        this.#items.push(item);
    }

    show(){
        console.log(this.#items);
    }
}