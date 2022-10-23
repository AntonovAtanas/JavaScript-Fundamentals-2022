function distinctArray(input) {

    let array = []
    let arrayLength = input.length

    for (let i = 0; i < arrayLength; i++) {
        if (!array.includes(input[i])){
            array.push(input[i])
        }
    }   

    console.log(array.join(' '))
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])