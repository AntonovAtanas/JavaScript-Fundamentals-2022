function arrayManipulations(input) {

    let array = input.slice(0, 1).toString().split(' ');

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        command = command.split(' ')

        let condition = command[0]
        let number = Number(command[1])
        let index = Number(command[2])

        if (condition === "Add") {
            array.push(number)
        } else if (condition === "Remove") {
            array = array.filter(num => num != number)
        } else if (condition === "RemoveAt") {
            array.splice(number, 1)
        } else if (condition === "Insert") {
            array.splice(index, 0, number)
        }
    }
    console.log(array.join(' '))
}

arrayManipulations(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2'])