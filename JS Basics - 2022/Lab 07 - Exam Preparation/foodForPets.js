function foodForPets (input){

    let index = 0
    let days = Number(input[index]);
    index++
    let totalFood = Number(input[index]);
    index++


    let sumDog = 0;
    let sumCat = 0;
    let biscuits = 0;
    

    for (let i = 1 ; i <= days ; i++){
        let foodEatenDog = Number(input[index])
        index++
        sumDog += foodEatenDog
        let foodEatenCat = Number(input[index])
        index++
        sumCat += foodEatenCat

        

        if (i % 3 === 0){
            
            biscuits += (foodEatenCat + foodEatenDog) * 0.10; 
        }

        
        
    }
    let totalEaten = (sumDog + sumCat);
    let totalEatenbyPercentage = (totalEaten / totalFood) * 100
    let totalDogPercentage = (sumDog / totalEaten) * 100
    let totalCatPercentage = (sumCat / totalEaten) * 100 

    
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${totalEatenbyPercentage.toFixed(2)}% of the food has been eaten.`)
    console.log(`${totalDogPercentage.toFixed(2)}% eaten from the dog.`)
    console.log(`${totalCatPercentage.toFixed(2)}% eaten from the cat.`)

}

foodForPets (["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])


