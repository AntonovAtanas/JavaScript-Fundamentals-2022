function vetParking (input){

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalSum = 0;

    for (let i = 1; i <= days ; i++){

        let dayTotal = 0;


        for (let h = 1; h <= hours ; h++){

            if (i % 2 === 0 && h % 2 !== 0){
                dayTotal += 2.50
                totalSum += 2.50
            }   else if (i % 2 !== 0 && h % 2 === 0){
                dayTotal += 1.25
                totalSum += 1.25
            }   else {
                dayTotal += 1
                totalSum += 1
            }


        }

        console.log(`Day: ${i} - ${dayTotal.toFixed(2)} leva`)

    }


    console.log(`Total: ${totalSum.toFixed(2)} leva`)


}


vetParking (["5",
"2"])

