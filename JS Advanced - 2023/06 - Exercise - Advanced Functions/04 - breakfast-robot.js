function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return (order) => {

        let [command, item, number] = order.split(' ');
        number = Number(number);
        if (command === 'restock') {
            ingredients[item] += number;
            return `Success`
        } else if (command === 'prepare') {
            let context = recipes[item]
            return calc.call(context, number)
        } else {
            return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
        }

    }

    function calc(number) {
        for (const key in this) {

            if (ingredients[key] <= this[key] * number) {
                return `Error: not enough ${key} in stock`;

            } else {
                ingredients[key] -= this[key] * number;
            }
        }
        return 'Success';
    };
}

let manager = solution();

console.log(manager('restock carbohydrate 10'));

console.log(manager('restock flavour 10'));

console.log(manager('prepare apple 1'));

console.log(manager('restock fat 10'));

console.log(manager('prepare burger 1'));

console.log(manager('report'));
