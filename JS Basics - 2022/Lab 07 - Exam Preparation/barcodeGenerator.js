function barcodeGenerator(input) {


    let firstNumber = input[0];
    let lastNumber = input[1];

    let buff = " ";


    for (let i = firstNumber[0]; i <= lastNumber[0]; i++) {

        for (let k = firstNumber[1]; k <= lastNumber[1]; k++) {

            for (let m = firstNumber[2]; m <= lastNumber[2]; m++) {

                for (let n = firstNumber[3]; n <= lastNumber[3]; n++) {
                   
                    if (i % 2 === 1 && k % 2 === 1 && m % 2 === 1 && n % 2 === 1) {
                        buff += `${i}${k}${m}${n} `;
                    }
                }
            }
        }
    }

console.log(buff)
}

barcodeGenerator(["2345", "6789"])