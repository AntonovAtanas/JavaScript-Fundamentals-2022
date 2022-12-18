function largestNumber(firstNum, secondNum, thirdNum) {

    // one line solution:  console.log(`The largest number is ${Math.max(firstNum, secondNum, thirdNum)}.`)

    let number = 0;

    if (firstNum >= secondNum && firstNum >= thirdNum){
        number = firstNum;
    } else if (secondNum >= firstNum && secondNum >= thirdNum){
        number = secondNum;
    } else {
        number = thirdNum;
    }

    console.log(`The largest number is ${number}.`)
}

largestNumber(-3, -5, -22.5)