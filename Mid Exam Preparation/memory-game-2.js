function memoryGame (input){

    let sequence = input.shift().split(' ');
    let guess = input.shift().split(' ');
    let movesCounter = 0;

    while (guess[0] !== "end"){

        let firstNumber = Number(guess[0]);
        let secondNumber = Number(guess[1]);
        movesCounter++

        if (firstNumber == secondNumber || !sequence[firstNumber] || !sequence[secondNumber]){
            let middleOfSequenceIndex = (sequence.length / 2);
            let elementToAdd = `-${movesCounter}a`
            sequence.splice(middleOfSequenceIndex, 0, elementToAdd, elementToAdd)
            console.log(`Invalid input! Adding additional elements to the board`)
            guess = input.shift().split(' ');
            continue;
        }

        if (sequence[firstNumber] == sequence[secondNumber]){
            console.log(`Congrats! You have found matching elements - ${sequence[firstNumber]}!`)
            sequence.splice(firstNumber, 1)
            let indexToDelete = secondNumber-1
            if (indexToDelete < 0){
                indexToDelete = 0
            }
            sequence.splice(indexToDelete, 1)
        } else if (sequence[firstNumber] != sequence[secondNumber]){
            console.log(`Try again!`)
        } 
        
        if (sequence.length < 1){
            console.log(`You have won in ${movesCounter} turns!`)
            break;
        }
        guess = input.shift().split(' ');
    }

    if (guess[0] == "end"){
        console.log(`Sorry you lose :(`)
        console.log(sequence.join(' '))
    }
}

memoryGame ([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])