function nonDecreasingSubset(input) {


    let currentBiggestNumber = input[0];

    let newArr = [];
    newArr.push(currentBiggestNumber)

    for (let i = 1; i < input.length; i++) {

        let currentNum = Number(input[i]);
        let lastElement = newArr[newArr.length - 1]
        if (currentNum >= lastElement) {
            newArr.push(currentNum);
        }
    }
    console.log(newArr.join(' '))
}

nonDecreasingSubset([20, 3, 2, 15, 6, 1])