function heroicInventory(input) {

    let registerArr = [];
    for (const currentHero of input) {

        let [name, level, items] = currentHero.split(' / ');
        items = items ? items.split(', ') : []
        level = Number(level);
        let register = { name, level, items };

        registerArr.push(register);
    }

    return JSON.stringify(registerArr);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));