function vacation(input) {

    let index = 0;
    let vacationCost = Number(input[index])
    index++

    let startingMoney = Number(input[index])
    index++

    let command = input[index]
    index++

    let moneySpentOrSaved = 0;
    let days = 0;
    let spendDays = 0;


    while (startingMoney < vacationCost) {
        
        moneySpentOrSaved = Number(input[index])
        index++
        

        if (command === "spend") {
            startingMoney = startingMoney - moneySpentOrSaved
            spendDays++

        }

        if (spendDays === 5){
            console.log("You can't save the money.")
            console.log(spendDays)
            break;
        }

        if (startingMoney <= 0) {
            startingMoney = 0
        }

        if (command === "save") {
            startingMoney = startingMoney + moneySpentOrSaved ;
            spendDays = 0 ;
        }
        
        
        days++
        command = input[index]
        index++
        
        if (startingMoney >= vacationCost){
            console.log(`You saved the money for ${days} days.`)
            break;
        }
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









// (["110",

// "60",

// "spend",

// "10",

// "spend",

// "10",

// "spend",

// "10",

// "spend",

// "10", "spend", "10"])