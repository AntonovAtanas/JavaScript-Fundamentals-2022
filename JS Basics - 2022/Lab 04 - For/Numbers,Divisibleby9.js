function numbers (input){

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sum = 0;
    let buff = "";

    
    for (let i = firstNumber ; i <= secondNumber; i++ ){
       if (i % 9 === 0){
        sum += i;
        buff += i + "\n";
       }
    }
    
    console.log(`The sum: ${sum}`)
    console.log(buff)
}

numbers (["100", "200"])