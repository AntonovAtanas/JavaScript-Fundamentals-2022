function distinctArray(input) {

    let array = input.slice();

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        for (let k = i + 1; k < array.length; k++) {
            let compareNumber = array[k];

            if (currentNumber === compareNumber) {
                array.splice(k, 1)
                k -= 1
            }
        }
    }
    console.log(array.join(' '))
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])