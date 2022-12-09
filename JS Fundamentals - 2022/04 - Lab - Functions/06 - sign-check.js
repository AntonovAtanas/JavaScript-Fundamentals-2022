function signCheck (numOne, numTwo, numThree){

    let array = [];
    array.push(numOne)
    array.push(numTwo)
    array.push(numThree)

    let positiveCounter = 0;
    let negativeCounter = 0;

    for (let i = 0; i < array.length; i++){

        if (array[i] >= 0 ){
            positiveCounter++
        } else {
            negativeCounter++
        }
    }

    if (negativeCounter % 2 !== 0 || positiveCounter == 0){
        console.log("Negative")
    } else {
        console.log("Positive");
    }
}

signCheck (5, 1, 1)