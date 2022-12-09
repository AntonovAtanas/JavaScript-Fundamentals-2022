function rightPlace(firstWord, character, secondWord) {

    let newWord = firstWord.replace('_', character)

    if (newWord === secondWord) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }

}

rightPlace('Str_ng', 'i',

    'String')