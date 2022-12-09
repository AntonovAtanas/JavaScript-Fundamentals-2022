function commonElements (input1, input2){

    for (let command of input1){

        for (let commandCheck of input2){
            if (command === commandCheck){
                console.log(command)
            }
        }

    }

}

commonElements (['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l'])