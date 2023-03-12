function company(input) {

    let register = {};

    for (const currentCar of input) {
        let [brand, model, quantity] = currentCar.split(' | ');
        quantity = Number(quantity);

        if (!register[brand]) {
            register[brand] = {};
        }

        if (!register[brand][model]) {
            register[brand][model] = 0;
        }
        register[brand][model] += quantity;
    };

    for (const key in register) {
        console.log(key)
        for (const model in register[key]) {
            console.log(`###${model} -> ${register[key][model]}`)
        }
    }
}

company(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'])