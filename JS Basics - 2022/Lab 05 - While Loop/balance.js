function accountBalance (input){

    let index = 0;
    let account = 0;


    let command = input[index]
    index++

    while (command !== "NoMoreMoney"){

        
        let payment = Number(command)
       
        if (payment < 0){
            console.log(`Invalid operation!`)
            break;
        }

        account += payment
        console.log(`Increase: ${payment.toFixed(2)}`)
        
        command = input[index]
        index++

    }

    console.log(`Total: ${account.toFixed(2)}`)
}

accountBalance (["120", "45.55", "-150"])