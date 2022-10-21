function processOddNumbers(input) {

    let tempArray = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            let number = input[i];
            number = number * 2
            tempArray.push(number)
        }
    }
    tempArray.reverse();
    console.log(tempArray.join(' '))
}

processOddNumbers([10, 15, 20, 25])

