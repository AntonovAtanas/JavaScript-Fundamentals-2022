function sequences(input) {
    let finalArray = [];

    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));

    for (let i = 0; i < input.length; i++) {

        let currentArr = input[i];
        let isUnique = true;

        for (let k = 0; k < finalArray.length; k++) {
            let compareArr = finalArray[k];
            if (currentArr.toString() === compareArr.toString()) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            finalArray.push(currentArr)
        }
    }

    finalArray.sort((a, b) => a.length - b.length)

    for (const iterator of finalArray) {
        console.log(`[${iterator.join(', ')}]`)
    }
}

sequences(

    // ["[-3, -2, -1, 0, 1, 2, 3, 4]",

    // "[10, 1, -17, 0, 2, 13]",

    // "[4, -3, 3, -2, 2, -1, 1, 0]",]

    ["[7.14, 7.180, 7.339, 80.099]",

        "[7.339, 80.0990, 7.140000, 7.18]",

        "[7.339, 7.180, 7.14, 80.099]"]
)

