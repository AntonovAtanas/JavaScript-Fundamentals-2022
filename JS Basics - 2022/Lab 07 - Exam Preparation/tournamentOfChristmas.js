function tournamentChristmas(input) {

    let index = 0;
    let days = Number(input[index]);
    index++

    let totalWinsCounter = 0;
    let totalLoseCounter = 0;
    let totalMoneyDaily = 0;
    let finalBonus = 0;



    for (let i = 0; i !== days; i++) {
        let command = input[index];
        index++


        let dayWinCounter = 0;
        let dayLoseCounter = 0;


        while (command !== "Finish") {

            if (command === "win") {
                totalWinsCounter++
                dayWinCounter++
            } else if (command === "lose") {
                totalLoseCounter++
                dayLoseCounter++
            }


            command = input[index]
            index++

        }

        let moneyForDay = dayWinCounter * 20
        let bonusMoneyDay = 0;
        if (dayWinCounter > dayLoseCounter) {
            bonusMoneyDay = moneyForDay * 0.10

        }
        totalMoneyDaily += moneyForDay + bonusMoneyDay
    }

    if (totalWinsCounter > totalLoseCounter){
        finalBonus = totalMoneyDaily * 0.2
        totalMoneyDaily += finalBonus
        console.log(`You won the tournament! Total raised money: ${totalMoneyDaily.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyDaily.toFixed(2)}`)
    }

}

tournamentChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

