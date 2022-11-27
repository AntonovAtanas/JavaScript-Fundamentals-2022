function valueString(input) {

    let sentence = input.shift();
    let sum = 0;

    if (input[0] === "UPPERCASE") {

        for (const currentChar of sentence) {
            let currentCode = Number(currentChar.charCodeAt(0));
            if (currentCode >= 65 && currentCode <= 90) {
                sum += currentCode
            }
        }

    } else {
        for (const currentChar of sentence) {
            let currentCode = Number(currentChar.charCodeAt(0));
            if (currentCode >= 97 && currentCode <= 122) {
                sum += currentCode
            }
        }
    }
    console.log(`The total sum is: ${sum}`)
}

valueString(['HelloFromMyAwesomePROGRAM',

'LOWERCASE'])