function pascalSplitter (input){

    let result = input[0];

    for (let i = 1; i <= input.length-1; i++){
        let currentChar = input[i];

        if (currentChar === currentChar.toUpperCase()){
            result += ', '
        } 
        result += currentChar
    }
    console.log(result)
}

pascalSplitter ('HoldTheDoor')