function palindromeIntegers (input){

    for(let i = 0; i < input.length; i++){

        let currentNumber = String(input[i]);
        let compareNumber = '';

        for (let k = currentNumber.length-1; k >= 0; k--){
            let digit = currentNumber[k];
            compareNumber += digit
        }

        if (currentNumber === compareNumber){
            console.log('true')
        } else {
            console.log('false')
        }
    }
}
palindromeIntegers ([32,2,232,1010])