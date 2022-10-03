function evenOddSubtraction(input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let index of input){
        let number = Number(index);
        
        if (number % 2 === 0){
            evenSum += number
        } else {
            oddSum += number
        }
    }

    console.log(evenSum - oddSum)
}

evenOddSubtraction([1, 2, 3, 4, 5, 6])