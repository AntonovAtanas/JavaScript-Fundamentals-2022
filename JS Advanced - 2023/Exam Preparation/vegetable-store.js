class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    };

    loadingVegetables(vegetables) {
        for (let currentVegetable of vegetables) {
            let storeObj = {};
            let [type, quantity, price] = currentVegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let result = this.availableProducts.find(element => element.hasOwnProperty(type));

            if (result === undefined) {
                storeObj[type] = { quantity, price };
                this.availableProducts.push(storeObj);
            } else {
                let index = this.availableProducts.indexOf(result)
                this.availableProducts[index][type]['quantity'] += quantity;
                if (price > this.availableProducts[index][type]['price']) {
                    this.availableProducts[index][type]['price'] = price;
                }
            }
        }
        let items = []
        for (const iterator of this.availableProducts) {
            items.push(Object.keys(iterator))
        }
        return `Successfully added ${items.join(', ')}`
    };

    buyingVegetables(selectedProducts) {
        let total = 0;
        for (let element of selectedProducts) {
            let [type, quantity] = element.split(' ');
            quantity = Number(quantity);

            let result = this.availableProducts.find(element => element.hasOwnProperty(type));

            if (result === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${total.toFixed(2)}.`)
            } else if (result[type]['quantity'] < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${total.toFixed(2)}.`)
            } else {
                let index = this.availableProducts.indexOf(result);
                let pricePerKg = this.availableProducts[index][type]['price'];
                total += pricePerKg * quantity;
                this.availableProducts[index][type]['quantity'] -= quantity;
            }
        }
        return `Great choice! You must pay the following amount $${total.toFixed(2)}.`
    };

    rottingVegetable(type, quantity) {
        let result = this.availableProducts.find(element => element.hasOwnProperty(type));

        if (result === undefined) {
            throw new Error(`${type} is not available in the store.`)
        } else if (result[type]['quantity'] < quantity) {
            let index = this.availableProducts.indexOf(result);
            this.availableProducts[index][type]['quantity'] = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            let index = this.availableProducts.indexOf(result);
            this.availableProducts[index][type]['quantity'] -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    };

    revision() {
        this.availableProducts.sort((a, b) => {
            let b1 = Object.entries(b)
            let a1 = Object.entries(a)
            return a1[0][1]['price'] - b1[0][1]['price']
        })

        let vegetablesInfo = ['Available vegetables:']

        for (const iterator of this.availableProducts) {
            for (const key in iterator) {
                vegetablesInfo.push(`${key}-${iterator[key]['quantity']}-$${iterator[key]['price']}`)
            }
        }

        vegetablesInfo.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return vegetablesInfo.join('\n')
    };

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());




