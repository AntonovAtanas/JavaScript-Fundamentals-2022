function sumOf2Numbers(input) {

    let startNumber = Number(input[0])
    let endNumber = Number(input[1])
    let magicNumber = Number(input[2])

    let combination = 0;
    let isFound = false;

    for (let firstNumber = startNumber; firstNumber <= endNumber; firstNumber++) {

        for (let nextNumber = startNumber; nextNumber <= endNumber; nextNumber++) {
            let res = firstNumber + nextNumber
            combination++
            if (res === magicNumber) {
                console.log(`Combination N:${combination} (${firstNumber} + ${nextNumber} = ${magicNumber})`)
                isFound = true
                break;
            }
        
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound){
        console.log(`${combination} combinations - neither equals ${magicNumber}`)
    }

}

sumOf2Numbers(["23", "24", "20"])