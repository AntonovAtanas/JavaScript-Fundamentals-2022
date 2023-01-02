function oddPositions (input){

    const result = [];

    for(let i = input.length-1; i >= 0; i--){
        if (i % 2 != 0){
            result.push(input[i]*2)
        }
    }
    return result.join(' ')
}

console.log(oddPositions ([3, 0, 10, 4, 7, 3]));
console.log(oddPositions ([10, 15, 20, 25]));