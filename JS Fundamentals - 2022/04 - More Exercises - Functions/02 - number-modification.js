function numberModification (input){

    let averageNotHigherThan = 5;
    let number = String(input).split('');
    let counter = 0;
    let numberLength = number.length;
    let index = numberLength;

    for (let i of number){
        counter += Number(i)
    }
    
    while (counter / numberLength <= averageNotHigherThan){
        number.push(9)
        let digit = Number(number[index]);
        counter += digit;
        numberLength++
    }

    console.log(number.join(''))
}

numberModification (5835)