function easterDecor (input){

    let index = 0;
    let numberClients = Number(input[index]);
    index ++

    let command = input[index];
    index++


    let totalSumCounter = 0;

    for (let i = 0 ; i < numberClients ; i++){

        let customerSum = 0;
        let numberOfPurchases = 0;


        while (command !== "Finish"){

            switch(command){

                case "basket" : customerSum += 1.50 ; numberOfPurchases++  ; break;
                case "wreath" : customerSum += 3.80 ; numberOfPurchases++ ; break;
                case "chocolate bunny" : customerSum += 7 ; numberOfPurchases++ ; break;

            }
            command = input[index]
            index++
        }

        command = input[index];
        index++

        if (numberOfPurchases % 2 === 0){
            customerSum = customerSum - (customerSum * 0.2)
        }

        totalSumCounter += customerSum

        console.log(`You purchased ${numberOfPurchases} items for ${customerSum.toFixed(2)} leva.`)
        


    }
    
    console.log(`Average bill per client is: ${(totalSumCounter / numberClients).toFixed(2)} leva.`)


}

easterDecor (["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

