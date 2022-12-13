function steps(input) {

    let index = 0;
    let command = input[index];
    index++

    let stepsCounter = 0;
    let stepsNeeded = 10000;

    while (command !== "Going home") {

        let stepsCount = Number(command);
        stepsCounter += stepsCount;


        if (stepsCounter >= stepsNeeded) {
            console.log(`Goal reached! Good job!`)
            console.log(`${stepsCounter - stepsNeeded} steps over the goal!`)
            break;
        }
        command = input[index];
        index++
    }

    if (command === "Going home") {
        // command = input[index];
        // index++
        let stepsBack = Number(input[index]);
        stepsCounter += stepsBack;
        if (stepsCounter >= stepsNeeded) {
            console.log(`Goal reached! Good job!`)
            console.log(`${stepsCounter - stepsNeeded} steps over the goal!`)
        } else {
            console.log(`${Math.abs(stepsNeeded - stepsCounter)} more steps to reach goal.`)
        }
    }

}

steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])