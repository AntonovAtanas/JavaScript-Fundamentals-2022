function juice(input) {

    let obj = {};
    let map = new Map();

    for (const currentJuice of input) {
        let [name, quantity] = currentJuice.split(' => ');
        quantity = Number(quantity);

        if (!obj[name]) {
            obj[name] = 0
        }

        obj[name] += quantity;

        if (obj[name] >= 1000) {
            map.set(name, obj[name])
        }
    }

    for (const key of map) {
        let bottles = key[1] / 1000;
        console.log(`${key[0]} => ${Math.floor(bottles)}`)
    }
}

juice(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549'])

console.log('------------------')

juice(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])