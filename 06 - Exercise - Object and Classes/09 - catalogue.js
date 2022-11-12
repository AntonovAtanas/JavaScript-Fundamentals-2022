function catalogue(input) {

    input.sort((a, b) => a.localeCompare(b));
    let array = [];
    let object = {};

    input.forEach((element, index) => {
        let [name, price] = element.split(' : ');
        let firstLetter = name[0];

        if (object.letter !== firstLetter) {
            array.push(object);
            object = {}
        }

        object.letter = firstLetter;
        object[name] = Number(price)
        if (index == input.length - 1) {
            array.push(object)
        }
    });
    array.splice(0, 1)

    for (let currentObj of array) {
        for (let key of Object.keys(currentObj)) {
            if (currentObj[key].length < 2) {
                console.log(currentObj[key])
            } else {
                console.log(`  ${key}: ${currentObj[key]}`)
            }
        }
    }
}

catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

])