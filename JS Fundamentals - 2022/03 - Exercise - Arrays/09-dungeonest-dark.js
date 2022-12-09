function dungeonestDark(input) {
    let arr = input.toString();
    let separatedInput = arr.split("|");
    let lastArray = [];
    let didSucceed = true;

    for (let i = 0; i < separatedInput.length; i++) {
        let temp = separatedInput[i];
        let splitter = temp.split(' ')
        lastArray.push(splitter[0], splitter[1])
    }

    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let index = 0;

    while (index <= lastArray.length - 1) {
        let itemOrMonster = lastArray[index]
        index++
        let number = Number(lastArray[index])
        index++
        bestRoom++

        if (itemOrMonster === "potion") {
            let missingHealth = 100 - health
            health += number;

            if (health >= 100) {
                health = 100
                console.log(`You healed for ${missingHealth} hp.`)
            } else {
                console.log(`You healed for ${number} hp.`)
            }
            console.log(`Current health: ${health} hp.`)
        } else if (itemOrMonster === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`)
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`)
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`)
                console.log(`Best room: ${bestRoom}`)
                didSucceed = false;
                break;
            }
        }

    }
    if (didSucceed) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])