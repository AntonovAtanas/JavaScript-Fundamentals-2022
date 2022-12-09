function maxNumber (input){

    let topIntegers = '';

    for (let i = 0; i < input.length; i++){
        let currentNum = input[i]
        for (let k = i + 1; k <= input.length-1; k++){

            let compareNum = input[k]

            if (currentNum <= compareNum){
                break;
            }
            if (k === input.length-1){
                topIntegers += currentNum + ' '
            }
        }
    }
    topIntegers += input.pop();
    console.log(topIntegers)
}

maxNumber ([27, 19, 42, 2, 13, 45, 48])