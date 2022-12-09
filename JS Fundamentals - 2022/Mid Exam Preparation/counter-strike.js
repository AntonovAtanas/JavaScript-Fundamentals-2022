function counterStrike(input) {

    let array = input.slice()
    let energy = Number(array.shift());
    let wonBattles = 0;
    let index = 0;
    let command = array[index];
    index++

    while (command !== "End of battle") {
        let distance = Number(command);

        if (energy >= distance) {
            wonBattles++
            energy -= distance
            if (wonBattles % 3 == 0) {
                energy += wonBattles
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`)
            break;
        }
        command = array[index];
        index++
    }
    if (command === "End of battle"){
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
    }
}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
