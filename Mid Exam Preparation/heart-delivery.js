function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number)
    let neighborhoodLength = neighborhood.length
    let index = 0;
    let command = input.shift().split(' ')
    let failedCounter = 0;

    while (command[0] !== "Love!") {

        let jumpLength = Number(command[1]);
        index += jumpLength;

        if (index >= neighborhoodLength) {
            index = 0 
        }

        if (neighborhood[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`)
        } else {
            neighborhood[index] -= 2;
            if (neighborhood[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }
        command = input.shift().split(' ')
    }

    console.log(`Cupid's last position was ${index}.`)

    for (let i of neighborhood) {
        if (i > 0) {
            failedCounter++
        }
    }

    if (failedCounter > 0) {
        console.log(`Cupid has failed ${failedCounter} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])


