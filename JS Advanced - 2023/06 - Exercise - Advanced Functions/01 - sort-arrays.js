function sortArr(input, command) {

    if (command === 'asc'){
        return input.sort((a, b) => a - b)
    } else {
        return input.sort((a, b) => b - a)
    }

}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'))
console.log(sortArr([14, 7, 17, 6, 8], 'desc'))