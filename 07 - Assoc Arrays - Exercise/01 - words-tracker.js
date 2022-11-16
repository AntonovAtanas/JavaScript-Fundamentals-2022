function wordTracker(input) {

    let searchedWordsArray = input.shift().split(' ');
    let wordTrackerObject = {};

    searchedWordsArray.forEach(word => {
        let wordsCounter = 0;

        input.forEach(currentWord => {
            if (word === currentWord) {
                wordsCounter++
            }
        })

        wordTrackerObject[word] = wordsCounter;
    });

    let wordTrackerArr = Object.entries(wordTrackerObject).sort((wordA, wordB) => wordB[1] - wordA[1])

    for (const word of wordTrackerArr) {
        console.log(`${word[0]} - ${word[1]}`)
    }
}

wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])