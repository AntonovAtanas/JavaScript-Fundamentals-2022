function sortArr(input, command) {


    let sortObj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return input.sort(sortObj[command])
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'))
console.log(sortArr([14, 7, 17, 6, 8], 'desc'))