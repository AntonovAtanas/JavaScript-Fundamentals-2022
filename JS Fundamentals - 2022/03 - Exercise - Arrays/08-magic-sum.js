function magicSum(input, number) {

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let firstNum = input[i];
        let array = [];

        for (let k = i + 1; k < inputLength; k++) {
            let secondNum = input[k];

            if (firstNum + secondNum === number) {
                array.push(firstNum, secondNum);
                console.log(`${firstNum} ${secondNum}`)
            }
            
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6)