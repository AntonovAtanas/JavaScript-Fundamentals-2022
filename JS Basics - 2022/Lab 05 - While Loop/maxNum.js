function maxNumber (input){

    let index = 0;
    let command = input[index];
    index++

    let counter = Number.MIN_SAFE_INTEGER;

        while (command !== "Stop"){

            let num = Number(command);

            if (num > counter){
                counter = num
            }

            command = input[index];
            index++

        }

        console.log(counter)

}

maxNumber (["45", "-20", "7", "99", "Stop"])