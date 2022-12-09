function netherRealms(input) {

    const separatorRegex = /[, ]+/g;
    const healthRegex = /[^\*|\+|\-|\/|\.|\d+]/g;
    const damageRegex = /[+-]*[\d|\.]+/g;
    let object = {};

    let demonsArray = input.split(separatorRegex);

    for (const currentDemon of demonsArray) {
        let demonHealth = 0;
        let demonDamage = 0;
        let multiplicationCounter = 0;
        let divisionCounter = 0;

        let healthArr = currentDemon.match(healthRegex);
        if (healthArr) {
            for (const currentChar of healthArr) {
                let asciiCode = currentChar.charCodeAt(0);
                demonHealth += asciiCode;
            }
        }

        let damageArr = currentDemon.match(damageRegex);

        if (damageArr) {
            for (let currentNum of damageArr) {
                currentNum = Number(currentNum);
                demonDamage += currentNum
            }

            for (const currentChar of currentDemon) {
                if (currentChar === "*") {
                    multiplicationCounter++
                } else if (currentChar === "/") {
                    divisionCounter++
                }
            }

            if (multiplicationCounter > 0) {
                demonDamage *= (2 * multiplicationCounter)
            }
            if (divisionCounter > 0) {
                demonDamage /= (2 * divisionCounter)
            }
        }

        if (!object.hasOwnProperty(currentDemon)) {
            object[currentDemon] = [];
        }
        object[currentDemon].push(demonHealth);
        object[currentDemon].push(demonDamage);

    }

    let sortedArr = Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]))

    for (const currentDemon of sortedArr) {
        console.log(`${currentDemon[0]} - ${currentDemon[1][0]} health, ${(currentDemon[1][1]).toFixed(2)} damage`)
    }

}

netherRealms('M3ph1st0**, Azazel')