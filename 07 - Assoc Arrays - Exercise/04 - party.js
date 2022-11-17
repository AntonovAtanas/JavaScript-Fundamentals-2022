function softuniParty(input) {

    let guestsArray = [];
    let vipArray = [];
    let regularArray = [];
    let command = input.shift();

    while (command !== "PARTY") {

        const isVip = !isNaN(command[0]);

        if (isVip){
            vipArray.push(command)
        } else {
            regularArray.push(command)
        }

        guestsArray.push(command)
        command = input.shift();
    }

    let allGuestsArray = vipArray.concat(regularArray)

    for (const guest of input) {
            let indexToDelete = allGuestsArray.indexOf(guest);
            allGuestsArray.splice(indexToDelete, 1)
        
    }

    console.log(allGuestsArray.length)

    for (const guest of allGuestsArray) {
        console.log(guest)

    }
}

    softuniParty(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1',
        'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
        'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])

    softuniParty(['7IK9Yo0h',

        '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])