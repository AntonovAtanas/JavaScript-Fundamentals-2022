function passwordGenerator (input){

    let firstStr = input.shift();
    let secondStr = input.shift();
    let word = input.shift();
    let finalString = firstStr + secondStr;
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let isFinished = false;
    
    for (let k = 0; k <= word.length-1; k++){
        let replaceChar = word[k].toUpperCase();
        for (let i = 0; i <= finalString.length-1; i++){
            let currentChar = finalString[i];
            if (vowelsArr.includes(currentChar)){
                finalString = finalString.replace(currentChar, replaceChar);
                break;
            }
            if (i == finalString.length-1){
                isFinished = true;
            }
        }
        if (k == word.length-1){
            k = -1;
            if (isFinished){
                break;
            }
        }
    }

    console.log(`Your generated password is ${finalString.split('').reverse().join('')}`)
}

passwordGenerator ([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'])

  