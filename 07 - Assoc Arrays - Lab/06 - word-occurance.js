function wordOccurance(input) {

    let occuranceRegister = {};

    for (const word of input) {
        if (!occuranceRegister[word]) {
            occuranceRegister[word] = 0;
        }
        occuranceRegister[word]++
    }

    let occuranceRegisterAsArray = Object.entries(occuranceRegister).sort((keyA, keyB) => keyB[1] - keyA[1])

    for (const word of occuranceRegisterAsArray) {
        console.log(`${word[0]} -> ${word[1]} times`)
    }
}

wordOccurance(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])