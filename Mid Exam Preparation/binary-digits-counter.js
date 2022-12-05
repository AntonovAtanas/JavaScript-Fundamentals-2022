function binaryDigitsCounter(number, digit) {

    let counter = 0;

    while (number > 0) {
        let left = number % 2;

        if (left == digit) {
            counter++
        }
        number = Math.floor(number/2);
    }
    console.log(counter)
}

binaryDigitsCounter(100, 0)