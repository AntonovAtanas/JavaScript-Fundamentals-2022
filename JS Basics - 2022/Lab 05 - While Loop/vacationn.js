function vacation(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++

    let startMoney = Number(input[index]);
    index++

    let money = startMoney;
    let daysCounter = 0;
    let spendDays = 0;

    while (money < moneyNeeded) {

        let command = input[index];
        index++


        if (command === "spend") {
            let moneySpent = Number(input[index])
            index++
            daysCounter++
            spendDays++
            money -= moneySpent
            if (money < 0) {
                money = 0;
            }
        } else if (command === "save") {
            let moneySaved = Number(input[index])
            index++
            daysCounter++
            spendDays = 0;
            money += moneySaved
        }

        if (spendDays ===  5){
            console.log(`You can't save the money.`)
            console.log(`${daysCounter}`)
            break;
        }

    }

    if (money >= moneyNeeded){
        console.log(`You saved the money for ${daysCounter} days.`)
    }

}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])