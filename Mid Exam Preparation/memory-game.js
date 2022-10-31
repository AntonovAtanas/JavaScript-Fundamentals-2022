function memoryGame(input) {

    let array = input.slice();
    let sequence = array.shift().split(' ');
    let index = 0;
    let command = array[index];
    index++
    let movesCounter = 0;

    while (command !== "end") {
        let currentCommand = command.split(' ');
        let firstGuess = Number(currentCommand[0]);
        let secondGuess = Number(currentCommand[1]);
        movesCounter++

        let firstGuessedNumber = (sequence[firstGuess]);
        let secondGuessedNumber = (sequence[secondGuess]);

        if (firstGuess == secondGuess || !sequence[firstGuess] || !sequence[secondGuess]) {
            let middleIndex = sequence.length / 2;
            let insertElement = `-${movesCounter}a`
            sequence.splice(middleIndex, 0, insertElement, insertElement)
            console.log(`Invalid input! Adding additional elements to the board`)
            command = array[index];
            index++
            continue;
        }

        if (firstGuessedNumber === secondGuessedNumber) {
            console.log(`Congrats! You have found matching elements - ${firstGuessedNumber}!`)
            sequence.splice(firstGuess, 1);
            let indexOfSecondNumber = sequence.indexOf(secondGuessedNumber)
            sequence.splice(indexOfSecondNumber, 1)
        }

        if (firstGuessedNumber !== secondGuessedNumber) {
            console.log(`Try again!`)
        }

        if (sequence.length < 1) {
            console.log(`You have won in ${movesCounter} turns!`)
            break;
        }

        command = array[index];
        index++
        if (command === "end") {
            console.log(`Sorry you lose :(`)
            console.log(sequence.join(' '))
            break;
        }
    }
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    )