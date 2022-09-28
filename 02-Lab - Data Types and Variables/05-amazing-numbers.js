function amazingNumbers(number) {


    let counter = 0;
    let strNumber = number.toString();


    for (let i = 0; i < strNumber.length; i++) {

        let digit = Number(strNumber[i]);
        counter += digit
    }

    let strCounter = counter.toString();

    if (strCounter.includes("9")) {
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }

}

amazingNumbers(1233)