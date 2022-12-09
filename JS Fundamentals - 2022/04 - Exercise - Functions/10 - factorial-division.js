function factorialDivision(firstNumber, secondNumber){

    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = firstNumber; i >= 1; i--){
        firstFactorial *= i
    }

    for (let i = secondNumber; i >= 1; i--){
        secondFactorial *= i
    }

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2))
}

factorialDivision (5, 2)