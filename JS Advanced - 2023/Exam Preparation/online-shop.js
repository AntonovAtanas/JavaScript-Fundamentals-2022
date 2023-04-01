class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = []
    };

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ [product]: quantity });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`
    };

    quantityCheck(product, minimalQuantity) {
        let isFound = this.products.find(element => element[product]);
        let index = this.products.indexOf(isFound);

        if (!isFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };

        if (minimalQuantity <= isFound[product]) {
            return `You have enough from product ${product}.`
        };
        let difference = minimalQuantity - isFound[product];
        this.products[index][product] = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`
    };

    sellProduct(product) {
        let isFound = this.products.find(element => element[product]);
        let index = this.products.indexOf(isFound);

        if (!isFound) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        this.products[index][product] -= 1;
        this.sales.push({ product: 1 }) // edge?

        return `The ${product} has been successfully sold.`
    };

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }

        let res = [`You sold ${this.sales.length} products today!`, "Products in the warehouse:"];

        for (const currentProduct of this.products) {
            let [name, quantity] = Object.entries(currentProduct)[0]
            res.push(`${name}-${quantity} more left`) // ??
        };

        return res.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


// The headphones has been successfully delivered in the warehouse.
// The laptop has been successfully delivered in the warehouse.
// You have enough from product headphones.
// You added 5 more from the laptop products.
// The headphones has been successfully sold.
// The laptop has been successfully sold.
// You sold 2 products today!
// Products in the warehouse:
// headphones-9 more left
// laptop-9 more left

