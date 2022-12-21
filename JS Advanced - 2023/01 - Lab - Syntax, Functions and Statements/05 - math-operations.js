function mathOperations(firstNum, secondNum, action) {

    let result = 0;

    switch (action) {
        case '+':
            result = firstNum + secondNum;
            break;

        case '-':
            result = firstNum - secondNum;
            break;

        case '/':
            result = firstNum / secondNum;
            break;

        case '*':
            result = firstNum * secondNum;
            break;

        case '%':
            result = firstNum % secondNum;
            break;

        case '**':
            result = firstNum ** secondNum;
            break;
    }
    console.log(result)
}

mathOperations(3, 5.5, '*')