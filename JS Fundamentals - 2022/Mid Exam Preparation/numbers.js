function numbers(input) {

    let array = input.split(' ').map(Number)
    let totalCounter = 0;
    let numbersCounter = 0;
    let isFinalArrayEmpty = false;

    for (let num of array) {
        totalCounter += num
        numbersCounter++
    }

    let averageNumber = totalCounter / numbersCounter

    array.sort((a, b) => b - a)
    let finalNumbers = []
    let topNumbersCounter = 0;
    for (let num of array) {
        if (num > averageNumber) {
            finalNumbers.push(num)
            isFinalArrayEmpty = true;
            topNumbersCounter++
            if (topNumbersCounter >= 5){
                break;
            }
        }
    }

    if (!isFinalArrayEmpty){
        console.log("No")
    } else {
        console.log(finalNumbers.join(' '))
    }
}

numbers('-1 -2 -3 -4 -5 -6')