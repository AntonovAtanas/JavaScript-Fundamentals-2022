function perfectNumber(input) {
    let number = input;

    let numberCounter = 0;

    for (let i = 1; i < number; i++) {

        if (number % i === 0) {
            numberCounter += i
        }
    }

    if (number - numberCounter === 0) {
        console.log('We have a perfect number!')
    } else {
        console.log(`It's not so perfect.`)
    }
}

perfectNumber(1236498)
