function rotateArray (input){

    let rotations = input.pop();

    for (let i = 0; i < rotations; i++){
        let currentElement = input.pop()
        input.unshift(currentElement)   
    }

    console.log(input.join(' '))
}

rotateArray (['Banana', 'Orange', 'Coconut',

'Apple', '15'])