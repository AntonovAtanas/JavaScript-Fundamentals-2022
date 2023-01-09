function carFactory(requirements) {

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    const hatchback = { type: 'hatchback', color: requirements.color };
    const coupe = { type: 'coupe', color: requirements.color };

    const finalCar = { model: requirements['model'] }

    if (requirements.power <= smallEngine.power) {
        finalCar.engine = smallEngine;
    } else if (requirements.power > smallEngine.power && requirements.power <= normalEngine.power) {
        finalCar.engine = normalEngine;
    } else {
        finalCar.engine = monsterEngine;
    }

    if (requirements.carriage == 'hatchback') {
        finalCar.carriage = hatchback;
    } else {
        finalCar.carriage = coupe;
    }

    let size = 0;

    if (requirements.wheelsize % 2 === 0) {
        size = requirements.wheelsize - 1;
        finalCar.wheels = [size, size, size, size];
    } else {
        size = requirements.wheelsize;
        finalCar.wheels = [size, size, size, size];
    }

    return finalCar;
}

console.log(carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 17
}));

console.log(carFactory({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}))