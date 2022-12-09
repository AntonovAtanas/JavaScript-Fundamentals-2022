function matrix (input){

    let number = input;
    let array = [];
    for (let i = 0; i < number; i++){
        array.push([])
        for (let k = 0; k < number; k++){
            array[i][k] = number
        }
        console.log(array[i].join(' '))
    }
    
}

matrix (7)