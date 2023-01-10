function storageCatalogue(input) {

    let catalogue = {};

    for (const currentItem of input) {
        let [item, price] = currentItem.split(' : ');
        price = Number(price);

        if (!catalogue.hasOwnProperty(item[0])) {
            catalogue[item[0]] = {};
        }
        catalogue[item[0]][item] = price;
    }

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sortedCatalogue) {
        console.log(key[0]);
        let sortedItems = Object.entries(key[1]).sort((a, b) => a[0].localeCompare(b[0]));
        for (const itemInfo of sortedItems) {
            console.log(`  ${itemInfo[0]}: ${itemInfo[1]}`)
        }
    }
}

storageCatalogue(
    ['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']
);
console.log(`--------------`)
storageCatalogue(
    ['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']
)