function treasureHunt(input) {

    let initialLoot = input.shift().split("|");
    let command = input.shift().split(' ');
    let stolenItems = []

    while (command[0] !== "Yohoho!") {

        if (command[0] === "Loot") {

            for (let i = 1; i < command.length; i++) {
                if (!initialLoot.includes(command[i])) {
                    initialLoot.unshift(command[i]);
                }
            }
        } else if (command[0] === "Drop") {
            let index = Number(command[1]);
            if (initialLoot[index]) {
                let droppedItem = initialLoot[index];
                initialLoot.splice(index, 1);
                initialLoot.push(droppedItem)
            }
        } else if (command[0] === "Steal") {
            let count = Number(command[1]);
            if (count > initialLoot.length) {
                stolenItems = initialLoot.splice(0, initialLoot.length);
                console.log(stolenItems.join(", "))
            } else {
                stolenItems = initialLoot.splice(-count, count);
                console.log(stolenItems.join(", "))
            }
        }
        command = input.shift().split(' ')
    }

    let totalTreasureGain = 0;
    let treasuresCount = initialLoot.length;

    for (let treasure of initialLoot) {
        let treasureLength = treasure.length;
        totalTreasureGain += treasureLength;
    }

    if (treasuresCount > 0) {
        console.log(`Average treasure gain: ${(totalTreasureGain / treasuresCount).toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }

}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

