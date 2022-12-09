function hardWords(input) {

    let textArr = input[0].split(' ');
    let words = input[1];

    for (const currentWord of words) {
        let wordLength = currentWord.length;

        for (let i = 0; i < textArr.length; i++) {
            let iterator = textArr[i]
            if (iterator.startsWith('_') && iterator.endsWith('_')) {
                if (wordLength === iterator.length) {
                    textArr[i] = currentWord
                }
            }

            if (iterator.startsWith('_') && !iterator.endsWith('_')) {
                let newIterator = iterator.slice(0, iterator.length - 1)
                if (wordLength === newIterator.length) {
                    let additionalWord = textArr[i].charAt(textArr[i].length - 1)
                    textArr[i] = currentWord + additionalWord
                }
            }
        }
    }
    console.log(textArr.join(' '))
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])