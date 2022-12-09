function condenseArray(input) {

    while (input.length > 1){

        for (let i = 0; i < input.length - 1; i++){
            input[i] = input[i] + input[i + 1]
        }

        input.length--
    }
    console.log(input[0])
}

condenseArray([5, 0, 4, 1, 2])