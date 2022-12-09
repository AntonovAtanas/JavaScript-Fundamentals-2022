function bitcoin(input) {


    const bitcoinPrice = 11949.16;
    const oneGramGold = 67.51;

    let daysCounter = 0;
    let bitcoinsCounter = 0;
    let goldCounter = 0;
    let firstDay = 0;

        for (let i = 0; i < input.length; i++) {
            daysCounter++
            let dailyMined = Number(input[i])
               

            if (daysCounter % 3 === 0){
                dailyMined -= dailyMined*0.30
            }

            goldCounter += dailyMined * oneGramGold 

            if (goldCounter >= bitcoinPrice){
                let howManyBitcoinsCanIBuy = goldCounter / bitcoinPrice
                bitcoinsCounter += Math.trunc(howManyBitcoinsCanIBuy)
                let moneySpent = Math.trunc(howManyBitcoinsCanIBuy) * bitcoinPrice
                goldCounter -= moneySpent
                if (firstDay === 0) {

                    firstDay = daysCounter;
                }
            }

            
        }
        console.log(`Bought bitcoins: ${bitcoinsCounter}`)
        if (firstDay > 0){
            console.log(`Day of the first purchased bitcoin: ${firstDay}`)
        }
        console.log(`Left money: ${goldCounter.toFixed(2)} lv.`)
        
}

bitcoin([3124.15, 504.212, 2511.124])