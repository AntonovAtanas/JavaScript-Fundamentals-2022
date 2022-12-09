function sumFirstLast (input){

    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());
    let sum = firstNum + lastNum;

    console.log(sum)
}

sumFirstLast (['20', '30', '40'])