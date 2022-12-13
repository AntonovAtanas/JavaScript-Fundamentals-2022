function balance (input){

    let index = 0;
    let command = input[index];
    index++

    let counter = 0;

        while(command !== "NoMoreMoney"){

            let sum = Number(command)

            if (sum < 0){
                console.log(`Invalid operation!`)
                break;
            }

            counter += sum

            console.log(`Increase: ${sum.toFixed(2)}`)

            command = input[index];
            index++

        }


        console.log(`Total: ${counter.toFixed(2)}`)

}

balance (["120", "45.55", "-150"])