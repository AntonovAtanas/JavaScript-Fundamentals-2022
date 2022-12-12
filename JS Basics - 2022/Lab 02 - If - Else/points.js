function bonusPoints (input){

    let startPoints = Number(input[0]);
    let bonusPoints = 0 ;
    let addBonusPoints = 0;
    
    if (startPoints <= 100){
        bonusPoints = 5
    }   else if (startPoints > 100 && startPoints <= 1000){
        bonusPoints = startPoints * (20/100)
    } else {
        bonusPoints = startPoints * (10/100)
    }

    if (startPoints % 2 === 0){
        addBonusPoints = 1
    } else if (startPoints % 10 === 5){
        addBonusPoints = 2
    } else {
        addBonusPoints = 0
    }

    let finalPoints = startPoints + bonusPoints + addBonusPoints

    console.log(bonusPoints + addBonusPoints)
    console.log(finalPoints)
    

}

bonusPoints (["15875"])