function lift(input) {

    let liftCapacity = 4;
    let peopleToFit = Number(input[0]);
    let lifts = input[1].split(' ').map(Number)
    let index = 0;
    let checkIfAllLiftsAreFull = false

    while (peopleToFit !== 0) {
        let freeSpace = liftCapacity - lifts[index];

        let peopleForCurrentLift = 0;

        if (peopleToFit - freeSpace < 0) {
            peopleForCurrentLift = peopleToFit
        } else {
            peopleForCurrentLift = peopleToFit - (peopleToFit - freeSpace)
            if (peopleForCurrentLift > liftCapacity) {
                peopleForCurrentLift = liftCapacity
            }
        }

        peopleToFit -= peopleForCurrentLift
        lifts[index] += peopleForCurrentLift
        index++

        let allEqual = lifts => lifts.every(a => a === liftCapacity)
        let areEqual = allEqual(lifts)

        if (areEqual) { 
            checkIfAllLiftsAreFull = true;
        }

        if (peopleToFit == 0 && checkIfAllLiftsAreFull) {
            console.log(lifts.join(' '))
            break;
        }
        if (peopleToFit < 1) {
            console.log(`The lift has empty spots!`);
            console.log(lifts.join(' '))
            break;
        } 
        
        if (peopleToFit >= 1 && checkIfAllLiftsAreFull) {
            console.log(`There isn't enough space! ${peopleToFit} people in a queue!`);
            console.log(lifts.join(' '))
            break;
        }
    }
}

lift([
    "15",
    "0 0 0 0 0"
   ]
   )


