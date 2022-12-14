function goldMine (input){


    let index = 0;
    let locations = Number(input[index])
    index++

    let command = Number(input[index])
    index++

        for (let i = 1 ; i <= locations ; i++){

            let averageGoldExpected = Number(command)
            command = Number(input[index])
            index++

            let daysToWork = Number(command)
            

            let sumPerDay = 0;

            for (let y = 1 ; y <= daysToWork ; y++){
                command = Number(input[index])
                index++
                sumPerDay += command
            }

            command = Number(input[index])
            index++
            
            let aveRageGoldDay = (sumPerDay / daysToWork).toFixed(2)
            
            if (aveRageGoldDay >= averageGoldExpected){
                console.log(`Good job! Average gold per day: ${aveRageGoldDay}.`)
            } else {
                console.log(`You need ${(averageGoldExpected - aveRageGoldDay).toFixed(2)} gold.`)
            }

        }


}

goldMine (["1",
"5",
"3",
"10",
"1",
"3"])

