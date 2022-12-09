function manOWar(input) {

    let pirateshipStatus = input.shift().split('>').map(Number);
    let warshipStatus = input.shift().split('>').map(Number);
    let maximumHealth = Number(input.shift());
    let command = input.shift().split(' ')

    while (command[0] !== "Retire") {
        let condition = command[0];

        if (condition === "Fire") {
            let index = Number(command[1]);
            let damage = Number(command[2]);

            if (warshipStatus[index]) {
                warshipStatus[index] -= damage;
                if (warshipStatus[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`)
                    break;
                }
            }
        } else if (condition === "Defend") {
            let startIndex = command[1];
            let endIndex = command[2];
            let damage = command[3];

            if (pirateshipStatus[startIndex] && pirateshipStatus[endIndex]) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateshipStatus[i] -= damage
                    if (pirateshipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }
        } else if (condition === "Repair") {
            let repairIndex = Number(command[1]);
            let healthRepaired = Number(command[2]);
            if (pirateshipStatus[repairIndex]) {
                pirateshipStatus[repairIndex] += healthRepaired;
                if (pirateshipStatus[repairIndex] > maximumHealth) {
                    pirateshipStatus[repairIndex] = maximumHealth
                }
            }
        } else if (condition === "Status") {
            let needsRepair = maximumHealth * 0.20;
            let needsRepairCounter = 0
            for (let i = 0; i < pirateshipStatus.length; i++) {
                if (pirateshipStatus[i] < needsRepair) {
                    needsRepairCounter++
                }
            }
            console.log(`${needsRepairCounter} sections need repair.`)
        }
        command = input.shift().split(' ')
    }

    if (command[0] == "Retire") {
        let pirateship = 0;
        let warship = 0;
        for (let i of pirateshipStatus) {
            pirateship += i
        }
        for (let i of warshipStatus) {
            warship += i
        }
        console.log(`Pirate ship status: ${pirateship}`)
        console.log(`Warship status: ${warship}`)
    }
}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
