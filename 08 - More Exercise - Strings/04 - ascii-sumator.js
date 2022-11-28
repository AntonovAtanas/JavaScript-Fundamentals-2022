function asciiSumator(input){

    let sum = 0;
    let firstChar = input.shift();
    let firstCharCode = firstChar.charCodeAt(0);
    let secondChar = input.shift();
    let secondCharCode = secondChar.charCodeAt(0);

    for (const currentChar of input[0]) {
        let currentCharCode = currentChar.charCodeAt(0);

        if (currentCharCode > Math.min(firstCharCode, secondCharCode) && currentCharCode < Math.max(firstCharCode, secondCharCode)){
            sum += currentCharCode
        }
    }
    console.log(sum)
}

asciiSumator (['a',

'1',

'jfe392$#@j24ui9ne#@$'])