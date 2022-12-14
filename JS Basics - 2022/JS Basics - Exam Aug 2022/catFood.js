function catFood (input){


    let index = 0;
    let catNumber = Number(input[index]);
    index++
    
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;

    let totalFoodEaten = 0;


    for (let i = 1 ; i <= catNumber ; i++){
        let command = Number(input[i]);
        

        if ( command >= 100 && command < 200){
            group1++
            totalFoodEaten+= command
        } else if ( command < 300) {
            group2++
            totalFoodEaten+= command
        } else {
            group3++
            totalFoodEaten+= command
        }
        

    }

   
    let totalFoodEatenKg = totalFoodEaten / 1000;

    let sumNeeded = totalFoodEatenKg * 12.45

    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${sumNeeded.toFixed(2)} lv.`)
}

catFood (["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])


