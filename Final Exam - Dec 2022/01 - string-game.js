function stringGame(input) {

    let text = input.shift();
    let command = input.shift();

    while (command !== 'Done') {

        if (command.includes('Change')) {
            let [currentCommand, char, replacement] = command.split(' ');
            while (text.includes(char)) {
                text = text.replace(char, replacement)
            }
            console.log(text)

        } else if (command.includes('Includes')) {
            let [currentCommand, substr] = command.split(' ');
            if (text.includes(substr)) {
                console.log('True')
            } else {
                console.log('False')
            }

        } else if (command.includes('End')) {
            let [currentCommand, substr] = command.split(' ');
            if (text.endsWith(substr)) {
                console.log('True')
            } else {
                console.log('False')
            }

        } else if (command.includes('Uppercase')) {
            text = text.toUpperCase();
            console.log(text)

        } else if (command.includes('FindIndex')) {
            let [currentCommand, char] = command.split(' ');
            console.log(text.indexOf(char))

        } else if (command.includes('Cut')) {
            let [currentCommand, startIndex, count] = command.split(' ');
            startIndex = Number(startIndex);
            count = Number(count);
            text = text.substring(startIndex, startIndex + count);
            console.log(text)
        }
        command = input.shift();
    }
}

stringGame
    // (["//Th1s 1s my str1ng!//",
    //     "Change 1 i",
    //     "Includes string",
    //     "End my",
    //     "Uppercase",
    //     "FindIndex I",
    //     "Cut 5 5",
    //     "Done"])

    (["*S0ftUni is the B3St Plac3**",
        "Change 2 o",
        "Includes best",
        "End is",
        "Uppercase",
        "FindIndex P",
        "Cut 3 7",
        "Done"])

