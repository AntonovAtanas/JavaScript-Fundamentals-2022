class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr) {

        for (const currentProduct of arr) {
            let [productName, productQuantity, productTotalPrice] = currentProduct.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n')
    };

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        } else {
            this.menu[meal] = {}
            this.menu[meal]['price'] = Number(price);
            for (const currentProduct of neededProducts) {
                let [productName, productQuantity] = currentProduct.split(' ');
                productQuantity = Number(productQuantity);
                this.menu[meal][productName] = productQuantity;
            }
        }
        let res = Object.keys(this.menu);

        if (res.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${res.length} meals in the menu, other ideas?`
        }
    };

    showTheMenu() {
        let res = Object.keys(this.menu);
        if (res.length === 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            let result = [];

            for (const key in this.menu) {
                result.push(`${key} - $ ${this.menu[key].price}`)
            }
            return result.join('\n')
        }
    };

    makeTheOrder(meal){
        if (!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (const menuProduct in this.menu[meal]) {
                if (menuProduct === 'price'){
                   continue;
                }
                if (this.stockProducts.hasOwnProperty(menuProduct) && this.stockProducts[menuProduct] >= this.menu[meal][menuProduct]){
                    this.stockProducts[menuProduct] -= this.menu[meal][menuProduct]
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
        }
        this.budgetMoney += this.menu[meal]['price'];
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`
    }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


