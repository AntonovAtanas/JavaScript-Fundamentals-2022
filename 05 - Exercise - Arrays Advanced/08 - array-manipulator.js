function arrayManipulator(array, commands) {

    let numbersArray = array.slice();
    let commandsArray = commands.slice();

    let commandsLength = commandsArray.length

    for (let i = 0; i < commandsLength; i++) {
        let command = commandsArray[i];
        let splittedCommand = command.split(' ')
        let condition = splittedCommand[0]

        if (condition === "add") {

            let index = Number(splittedCommand[1])
            let number = Number(splittedCommand[2])
            numbersArray.splice(index, 0, number)

        } else if (condition === "addMany") {

            for (let i = splittedCommand.length - 1; i >= 2; i--) {
                let index = Number(splittedCommand[1]);
                let number = Number(splittedCommand[i]);
                numbersArray.splice(index, 0, number)
            }

        } else if (condition === "contains") {
            let indexOfElement = numbersArray.indexOf(Number(splittedCommand[1]))
            console.log(indexOfElement)

        } else if (condition === "remove") {
            let indexToRemove = Number(splittedCommand[1])
            numbersArray.splice(indexToRemove, 1)
        } else if (condition === "shift") {
            let rotations = Number(splittedCommand[1]);

            for (let i = 0; i < rotations; i++) {
                let number = numbersArray.shift()
                numbersArray.push(number)
            }
        } else if (condition === "sumPairs") {
            for (let i = 0; i < numbersArray.length; i++) {
                let firstNum = numbersArray[i];
                let secondNum = numbersArray[i + 1];
                if (i + 1 == numbersArray.length) {
                    break;
                }
                numbersArray[i] = firstNum + secondNum;
                numbersArray.splice(i + 1, 1)
            }
        } else if (condition === "print") {
            console.log(`[ ${numbersArray.join(', ')} ]`)
            break;
        }
    }

}

arrayManipulator([1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

        'shift 1', 'print'])