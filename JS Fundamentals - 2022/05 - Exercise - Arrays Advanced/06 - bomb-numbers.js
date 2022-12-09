function bombNumbers(numberSequence, bombNumber) {

    let numbers = numberSequence.slice();
    let bomb = bombNumber[0];
    let power = bombNumber[1];

    for (let i = 0; i < numberSequence.length; i++) {
        let currentNumber = numbers[i]

        if (currentNumber === bomb) {
            if (i - power < 0) {
                numbers.splice(0, (power + 1 + i))
                i--
            } else {
                numbers.splice(i - power, (power * 2 + 1))
                i--
            }
        }
    }
    let result = 0;

    for (let num of numbers) {
        result += num
    }
    console.log(result)
}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])