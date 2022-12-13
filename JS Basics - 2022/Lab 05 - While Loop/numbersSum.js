function numberSum (input){

    let index = 0;
    let firstNum = Number(input[index])
    index++
    
    let sum = 0;

    while (sum < firstNum){
        let currentNumber = Number(input[index]);
        index++;

        sum += currentNumber;
      
    }
    console.log(sum)
}

numberSum (["100", "10", "20", "30", "40"])