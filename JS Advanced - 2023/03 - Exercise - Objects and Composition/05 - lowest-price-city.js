function lowestPriceCity(data) {

    let products = {};

    for (const currentInfo of data) {
        let [town, product, productPrice] = currentInfo.split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(product)) {
            products[product] = [productPrice, town]
        } else if (products.hasOwnProperty(product) && productPrice < products[product][0]) {
            products[product] = [productPrice, town]
        }
    }

    for (const key in products) {
        let value = products[key]
        console.log(`${key} -> ${value[0]} (${value[1]})`)
    }
}

lowestPriceCity(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])