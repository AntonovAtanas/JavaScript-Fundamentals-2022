function equalSums(input) {


    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let buff = '';

    for (let i = firstNumber; i <= secondNumber; i++) {

        let currentNumAsStr = i.toString();
        let sumOdd = 0;
        let sumEven = 0;

        for (let odd = 0; odd < currentNumAsStr.length; odd++) {
            let currentDigit = Number(currentNumAsStr[odd]);
            let position = odd + 1;

            if (position % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }

        }

        if (sumOdd === sumEven) {
            buff += `${i} `;
        }

    }

    console.log(buff)

}

equalSums(["100115", "100120"])