function repeatingChars (input){

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let previousChar = input[i-1];
        let currentChar = input[i];

        if (currentChar !== previousChar){
            result.push(currentChar)
        }
    }
    console.log(result.join(''));
}

repeatingChars ('qqqwerqwecccwd')