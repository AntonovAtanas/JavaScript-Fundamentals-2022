function sumNumbers(input) {

    let number = String(input[0]);
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
       

        // switch (sum) {
        //     case "1": totalSum += 1; break;
        //     case "2": totalSum += 2; break;
        //     case "3": totalSum += 3; break;
        //     case "4": totalSum += 4; break;
        //     case "5": totalSum += 5; break;
        //     case "6": totalSum += 6; break;
        //     case "7": totalSum += 7; break;
        //     case "8": totalSum += 8; break;
        //     case "9": totalSum += 9; break;

        // }
    }

    console.log(`The sum of the digits is:${sum}`)

}

sumNumbers(["1234"])