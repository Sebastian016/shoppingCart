export class Item {
    #name;
    #price;
    constructor(itemName, itemPrice){
        this.#name = itemName;
        this.#price = itemPrice;
    }

    setPrice(price){
        this.#price = price;
    }

    setName(name){
        this.#name = name;
    }
}