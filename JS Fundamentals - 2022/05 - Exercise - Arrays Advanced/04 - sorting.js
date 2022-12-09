function sorting (input){

    let array = [];
    let inputLength = input.length

    for (let i = 0; i < inputLength; i++){
        let max = Math.max(...input)
        array.push(input.splice(input.indexOf(max), 1))

        let min = Math.min(...input)
        array.push(input.splice(input.indexOf(min), 1))
    }

  console.log(array.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])