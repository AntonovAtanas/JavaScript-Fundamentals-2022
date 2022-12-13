function sumNumbers (input){

    
    let index = 0;
    let firstNum = Number(input[index]);
    index++

    let command = Number(input[index]);
    index++

    let counter = 0;

        while (counter < firstNum){

            counter += command
            command = Number(input[index]);
            index++
        }

        console.log(counter)

}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"])