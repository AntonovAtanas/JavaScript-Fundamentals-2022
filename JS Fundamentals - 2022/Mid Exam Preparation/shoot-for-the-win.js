function shootForTheWin(input) {

    let array = input.slice();
    let targets = array.shift().split(' ').map(Number)
    let shotsCounter = 0;
    let alreadyShotsTargetByIndex = [];
    let index = 0;
    let command = array[index];
    index++


    while (command !== "End") {
        let currentIndex = Number(command);
        let currentNumber = targets[currentIndex];

        if (currentIndex >= 0 && currentIndex < targets.length) {
            if (!alreadyShotsTargetByIndex.includes(currentIndex)) {
                shotsCounter++
                alreadyShotsTargetByIndex.push(currentIndex)
                targets.splice(currentIndex, 1, -1)

                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] !== -1) {
                        if (targets[i] > currentNumber) {
                            targets[i] -= currentNumber
                        } else {
                            targets[i] += currentNumber
                        }
                    }
                }

            }

        }
        command = array[index];
        index++
    }
    console.log(`Shot targets: ${shotsCounter} -> ${targets.join(' ')}`)
}

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
