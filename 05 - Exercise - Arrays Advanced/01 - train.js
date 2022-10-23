function train(input) {

    let currentTrain = input.slice(0, 1).toString().split(' ');
    let wagonCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {

        let command = input[i];
        command = command.split(' ')

        if (command.length == 1) {
            let passengers = Number(command[0]);
            for (let i = 0; i < currentTrain.length; i++) {
                let currentWagon = Number(currentTrain[i]);

                if (currentWagon + passengers <= wagonCapacity) {
                    currentTrain[i] = currentWagon + passengers
                    break;
                }
            }
        } else {
            let passengers = Number(command[1]);
            currentTrain.push(passengers)
        }
    }
    console.log(currentTrain.join(' '))
}

train(['0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6'])