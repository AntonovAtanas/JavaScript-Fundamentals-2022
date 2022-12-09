function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let roomsCounter = 0;
    let commandArray = input.split("|")
    let commandsLength = commandArray.length

    for (let i = 0; i < commandsLength; i++) {
        let currentCommand = commandArray[i].split(' ')
        let command = currentCommand[0];
        let amount = Number(currentCommand[1]);
        roomsCounter++

        switch (command) {
            case "potion":
                let currentHealth = health
                health += amount
                if (health >= 100) {
                    console.log(`You healed for ${100 - currentHealth} hp.`)
                    health = 100;
                } else {
                    console.log(`You healed for ${amount} hp.`)
                }
                console.log(`Current health: ${health} hp.`)
                break;

            case "chest":
                bitcoins += amount;
                console.log(`You found ${amount} bitcoins.`)
                break;

            default:
                health -= amount;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomsCounter}`);
                    return;
                }
                break;
        }
        if (i == commandsLength - 1) {
            console.log(`You've made it!`)
            console.log(`Bitcoins: ${bitcoins}`)
            console.log(`Health: ${health}`)
            break;
        }
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")