function sumEvenNumbers(input) {

    let evenCounter = 0;

    for (let index of input) {
        let evenNumber = Number(index);
        if (evenNumber % 2 === 0) {
            evenCounter += evenNumber
        }
    }
    console.log(evenCounter);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])