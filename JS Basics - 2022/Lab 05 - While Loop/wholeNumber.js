function wholeNumber (input){

    let index = 0;
    let stopCommand = input[index]
    
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (stopCommand !== "Stop"){

       
        let number = Number(stopCommand)
        
        if (number > maxNum) {
            maxNum = number
        }

        stopCommand = input[index]
        index++
        
        console.log(maxNum)

    }

  
}

wholeNumber (["100",

"99",

"80",

"70",

"Stop"])