function touristShop (input){


    let index = 0;
    let budget = Number(input[index])
    index++

    let command = input[index];
    index++

    let totalSpent = 0;
    let promotionCounter = 0;

        while (command !== "Stop"){
            
            let spent = Number(input[index])
            index++
            totalSpent += spent
            promotionCounter += 1

            if (promotionCounter % 3 === 0){
                totalSpent -= (spent / 2) ;
            }
            command = input[index]
            index++
        
            if (command === "Stop"){
                console.log(`You bought ${promotionCounter} products for ${totalSpent.toFixed(2)} leva.`)
            }

            if (totalSpent > budget){
                console.log(`You don't have enough money!`)
                console.log(`You need ${Math.abs(totalSpent - budget).toFixed(2)} leva!`)
                break;
            }

        }

}

touristShop (["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

