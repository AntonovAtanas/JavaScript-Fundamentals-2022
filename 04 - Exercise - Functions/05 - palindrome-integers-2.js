function palindromeIntegers (input){

    for (let i = 0; i < input.length; i++){

        let currentNum = String(input[i]);
        let reversedNum = currentNum.split('').reverse().join('')

        if (currentNum === reversedNum){
            console.log('true')
        } else {
            console.log('false')
        }
    
    }
}
palindromeIntegers ([32,2,232,1010])