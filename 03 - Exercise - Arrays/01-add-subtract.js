function addSubtract(input) {

    let newArray = [];
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        oldSum += input[i];

        if (input[i] % 2 === 0) {
            newArray[i] = input[i] + i
        } else {
            newArray[i] = input[i] - i
        }

        newSum += newArray[i]
    }

    console.log(newArray)
    console.log(oldSum)
    console.log(newSum)
}

addSubtract([-5, 11, 3, 0, 2])