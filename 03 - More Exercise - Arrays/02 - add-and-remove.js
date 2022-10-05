function addOrRemove (input){

    let result = [];
    let number = 1 ;

    for (let command of input){
        
        if (command === "add"){
            result.push(number)
        } else {
            result.pop()
        }
        number++
    }

    if (result.length < 1){
        console.log('Empty')
    } else {
        console.log(result.join(' '))
    }
    
}

addOrRemove (['remove', 'remove', 'remove'])