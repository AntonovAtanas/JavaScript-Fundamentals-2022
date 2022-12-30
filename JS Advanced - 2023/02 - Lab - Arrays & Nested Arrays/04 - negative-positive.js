function negativePositive(input) {

    let array = [];

    for (const currentNum of input) {
        if (currentNum < 0) {
            array.unshift(currentNum);
        } else {
            array.push(currentNum)
        }
    }
    console.log(array.join('\n'))
}

negativePositive([3, -2, 0, -1])