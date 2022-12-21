function sumNNumbers (firstNum, secondNum){

    let result = 0;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
}

sumNNumbers ('-8', '20')