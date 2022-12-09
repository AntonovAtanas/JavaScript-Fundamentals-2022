function printNElement (input){

    let n = Number(input.pop())
    let elements = '';
    
    for (let i = 0; i < input.length; i += n){
        elements += input[i] + ' '
    }
    
    console.log(elements)

}

printNElement (['5', '20', '31', '4', '20', '2'])