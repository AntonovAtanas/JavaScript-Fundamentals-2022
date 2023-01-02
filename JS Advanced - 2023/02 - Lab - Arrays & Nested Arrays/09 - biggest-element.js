function biggestElement(input) {

    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        for (let k = 0; k < input[i].length; k++) {
            let currentNumber = input[i][k];

            if (currentNumber > biggestNum) {
                biggestNum = currentNumber;
            }
        }
    }
    return biggestNum;
}

console.log(biggestElement([[-20, -50, -10], [-8, -33, -145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));