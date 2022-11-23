function revealWords(searchedWords, sentence) {

    let wordsArr = searchedWords.split(', ');
    
    wordsArr.forEach(element => {
        let searchedSymbol = '*'.repeat(element.length)
        sentence = sentence.replace(searchedSymbol, element)
    });

    console.log(sentence)
}

revealWords('great, learning',

    'softuni is ***** place for ******** new programming languages')