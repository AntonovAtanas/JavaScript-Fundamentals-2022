function negativePositiveNumbers(input) {

    let newArray = [];

    for (let i of input) {
        let currentNum = Number(i)

        if (currentNum < 0) {
            newArray.unshift(currentNum)
        } else {
            newArray.push(currentNum)
        }
    }
    console.log(newArray.join('\n'))
}

negativePositiveNumbers(['3', '-2', '0', '-1'])