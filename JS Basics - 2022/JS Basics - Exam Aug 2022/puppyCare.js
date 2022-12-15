function puppyCare (input){

    let index = 0;
    let dogFoodKg = Number(input[index])
    index++
    let command = input[index]
    index++
    let dogFood = dogFoodKg * 1000
    let dogFoodEaten = 0;

    while ( command !== "Adopted"){

        let eatenFood = Number(command)
        dogFoodEaten += eatenFood
        command = input[index]
        index++
    }

    if (dogFoodEaten <= dogFood){
        console.log(`Food is enough! Leftovers: ${dogFood - dogFoodEaten} grams.`)
    } else {
        console.log(`Food is not enough. You need ${Math.abs(dogFoodEaten - dogFood)} grams more.`)
    }
}

puppyCare (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])