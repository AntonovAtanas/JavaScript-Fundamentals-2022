function stringSubstring(word, sentence) {

    let sentenceArr = sentence.split(' ')
    let isFound = false

    for (let currentWord of sentenceArr) {
        currentWord = currentWord.toLowerCase();
        if (word === currentWord) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(`${word}`);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',

    'JavaScript is the best programming language')