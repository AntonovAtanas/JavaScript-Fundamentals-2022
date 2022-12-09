function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetExpenses = 0;
    let swordExpenses = 0;
    let shieldExpenses = 0;
    let armorExpenses = 0;

    let shieldCounter = 0;
    let lostCounter = 0;

    for (let lostCount = 1; lostCount <= lostFights; lostCount++) {

        lostCounter += 1;

        if (lostCounter % 2 === 0) {
            helmetExpenses += helmetPrice;
        }

        if (lostCounter % 3 === 0) {
            swordExpenses += swordPrice;
        }

        if (lostCounter % 2 === 0 && lostCounter % 3 === 0) {
            shieldExpenses += shieldPrice;
            shieldCounter++;

            if (shieldCounter % 2 === 0) {
                armorExpenses += armorPrice
            }
        }

    }

    console.log(`Gladiator expenses: ${(helmetExpenses + swordExpenses + shieldExpenses + armorExpenses).toFixed(2)} aureus`)
}


gladiatorExpenses(7,

    2,

    3,

    4,

    5)