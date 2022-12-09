function oddOccurances(input) {

    let inputAsArray = input.split(' ');
    let array = [];
    let checkedWord = [];

    for (let i = 0; i < inputAsArray.length; i++) {
        let currentWord = inputAsArray[i].toLowerCase();
        let wordCounter = 1;

        for (let k = i + 1; k < inputAsArray.length; k++) {
            let compareWord = inputAsArray[k].toLowerCase();
            if (currentWord == compareWord) {
                wordCounter++
            }
        }

        if (array.includes(currentWord)) {
            continue;
        }

        if (checkedWord.includes(currentWord)) {
            continue;
        }

        if (wordCounter % 2 !== 0) {
            array.push(currentWord)
        }

        checkedWord.push(currentWord)
    }
    console.log(array.join(' '))
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')