function sumFirstLast (input) {

    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());

    let sum = firstNum + lastNum;
    return sum;

}

sumFirstLast (['20', '30', '40'])