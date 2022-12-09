function emojiDetector(input) {

    let emojiPattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let numberPattern = /[\d]/g;
    let validEmojis = [];
    let totalEmojis = 0;
    let text = input[0];
    let coolTreshold = 1;
    let foundNumbers = text.matchAll(numberPattern);
    let foundEmojis = text.matchAll(emojiPattern);

    for (const currentNumber of foundNumbers) {
        coolTreshold *= Number(currentNumber[0])
    }

    console.log(`Cool threshold: ${coolTreshold}`)

    for (const emoji of foundEmojis) {
        let asciiSum = 0;
        totalEmojis++

        for (const iterator of emoji.groups['emoji']) {
            let asciiNum = iterator.charCodeAt(0)
            asciiSum += asciiNum
        }
        if (asciiSum >= coolTreshold) {
            validEmojis.push(emoji[0])
        }
    }
    console.log(`${totalEmojis} emojis found in the text. The cool ones are:`)
    console.log(validEmojis.join('\n'))
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])