function pointsValidation(input) {

    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let x1y1toStart = Math.sqrt((0 - x1) * (0 - x1) + (0 - x2) * (0 - x2))
    let isFirstCheckInteger = Number.isInteger(x1y1toStart)

    let x2y2toStart = Math.sqrt((0 - y1) * (0 - y1) + (0 - y2) * (0 - y2))
    let isSecondCheckInteger = Number.isInteger(x2y2toStart)

    let distanceBetweenPoints = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
    let isDistanceInteger = Number.isInteger(distanceBetweenPoints)

    if (isFirstCheckInteger) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (isSecondCheckInteger) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (isDistanceInteger) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

pointsValidation([3, 0, 0, 4])