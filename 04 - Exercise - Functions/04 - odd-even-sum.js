function oddEvenSum (input){

    let number = String(input);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < number.length; i++){

        let currentNumber = Number(number[i]);

        if (currentNumber % 2 === 0){
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber
        }
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum (3495892137259234)