function Numbers(input) {

    let index = 0;
    let command = input[index];
    index++

    let primeNumbers = 0;
    let notPrimeNumbers = 0;

    while (command !== "stop") {
        let num = Number(command)

        if (num < 0) {
            console.log("Number is negative.")
            command = input[index];
            index++
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < num; divider++) {
            if (num % divider === 0) {
                isPrime = false;
                break;
            }
        }


        if (isPrime === true) {
            primeNumbers += num;
        } else {
            notPrimeNumbers += num
        }

        command = input[index];
        index++

    }

    console.log(`Sum of all prime numbers is: ${primeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${notPrimeNumbers}`)


}

Numbers(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])