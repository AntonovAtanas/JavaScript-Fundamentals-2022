function maxSequence(input) {

    let finalCounter = 0;
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i]
        let counter = 0;
        let tempArray = [currentNum];

        for (let k = i + 1; k < input.length; k++) {
            let compareNum = input[k];

            if (currentNum === compareNum) {
                counter += 1
            } else {
                break;
            }
            if (counter >= finalCounter) {
                finalCounter = counter
                tempArray.push(`${compareNum}`)
            }
        }
        if (tempArray.length > newArr.length) {
            newArr = tempArray
        }
    }
    console.log(newArr.join(' '))
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])