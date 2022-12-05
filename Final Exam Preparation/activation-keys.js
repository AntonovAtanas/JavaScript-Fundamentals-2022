function activationKeys(input) {

    let activationKey = input.shift();
    let command = input.shift();

    while (command !== 'Generate') {
        let commandArr = command.split('>>>')
        if (commandArr.includes('Contains')) {
            activationKey.includes(commandArr[1]) ? console.log(`${activationKey} contains ${commandArr[1]}`) : console.log('Substring not found!')
        } else if (commandArr.includes('Flip')) { 
            if (commandArr[1] === 'Upper') {
                let startIndex = Number(commandArr[2]);
                let endIndex = Number(commandArr[3]);
                for (let i = startIndex; i < endIndex; i++) {
                    let replacement = activationKey[i].toUpperCase();
                    activationKey = activationKey.substring(0, i) + replacement + activationKey.substring(i + 1)
                }
                console.log(activationKey)
            } else {
                let startIndex = Number(commandArr[2]);
                let endIndex = Number(commandArr[3]);
                for (let i = startIndex; i < endIndex; i++) {
                    let replacement = activationKey[i].toLowerCase();
                    activationKey = activationKey.substring(0, i) + replacement + activationKey.substring(i + 1)
                }
                console.log(activationKey)
            }
        } else if (commandArr.includes('Slice')) {
            let startIndex = Number(commandArr[1]);
            let endIndex = Number(commandArr[2]);
            activationKey = activationKey.slice(0, startIndex) + activationKey.slice(endIndex, activationKey.length)
            console.log(activationKey)
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`)
}

activationKeys(["134softsf5ftuni2020rockz42",

    "Slice>>>3>>>7",

    "Contains>>>-rock",

    "Contains>>>-uni-",

    "Contains>>>-rocks",

    "Flip>>>Upper>>>2>>>8",

    "Flip>>>Lower>>>5>>>11",

    "Generate"])

