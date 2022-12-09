function inventory(input) {

    let register = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' / ')

        let name = command[0];
        let level = Number(command[1]);
        let items = command[2];

        let currentHero = {
            Hero: name,
            level: level,
            items: items,
        }
        register.push(currentHero)
    }

    register.sort(function (a, b) {
        return a.level - b.level
    })

    for (let i = 0; i < register.length; i++) {
        let currentObj = register[i];
        
        for (let key of Object.keys(currentObj)) {
            if (key === "Hero") {
                console.log(`${key}: ${currentObj[key]}`)
            } else {
                console.log(`${key} => ${currentObj[key]}`)
            }
        }
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])