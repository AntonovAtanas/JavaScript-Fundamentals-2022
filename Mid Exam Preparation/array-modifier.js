function arrayModifier(input) {

    let array = input.slice();
    let sequence = array.shift().split(' ').map(Number);
    let index = 0;
    let command = array[index];

    while (command !== "end") {
        let currentCommand = array[index].split(' ')
        let condition = currentCommand[0];
        let firstIndex = Number(currentCommand[1]);
        let secondIndex = Number(currentCommand[2]);

        if (condition == "swap") {
            let firstIndexContent = Number(sequence[firstIndex]);
            let secondIndexContent = Number(sequence[secondIndex]);
            sequence.splice(firstIndex, 1, `${secondIndexContent}`);
            sequence.splice(secondIndex, 1, `${firstIndexContent}`);
        }

        if (condition == "multiply") {
            let firstIndexContent = Number(sequence[firstIndex]);
            let secondIndexContent = Number(sequence[secondIndex]);
            let multiplyResult = firstIndexContent * secondIndexContent;
            sequence.splice(firstIndex, 1, `${multiplyResult}`);
        }

        if (condition == "decrease") {
            sequence = sequence.map(n => n - 1)
        }

        command = array[index];
        index++
    }

    console.log(sequence.join(', '))
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)
