function numbers(input){

    let number = Number(input[0]);
    let startNumber = 1;

    for (let n = number; startNumber <= n ; startNumber += 3 ){
        console.log(startNumber)
    }

}

numbers (["15"])