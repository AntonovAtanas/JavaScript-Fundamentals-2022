function movingTarget(input) {

    let array = input.slice();
    let targets = array.shift().split(" ").map(Number);
    let index = 0;
    let command = array[index].split(' ')
    index++

    while (command[0] !== "End") {
        let condition = command[0];
        let targetIndex = Number(command[1]);
        let number = Number(command[2]);

        if (condition === "Shoot") {

            if (targetIndex < 0 || targetIndex >= targets.length) {

            } else {
                targets[targetIndex] -= number
                if (targets[targetIndex] <= 0) {
                    targets.splice(targetIndex, 1)
                }
            }

        } else if (condition === "Add") {

            if (targetIndex < 0 || targetIndex >= targets.length) {
                console.log('Invalid placement!')
            } else {
                targets.splice(targetIndex, 0, number)
            }

        } else if (condition === "Strike") {
            if (targetIndex - number < 0 || number + targetIndex >= targets.length || targetIndex < 0 || targetIndex >= targets.length) {
                console.log('Strike missed!');
            } else {
                targets.splice(targetIndex - number, 2 * number + 1)
            }
        }

        command = array[index].split(' ')
        index++
    }

    console.log(targets.join("|"))
}

movingTarget(["1 2 3 4 5",

    "Strike 0 1",

    "End"])