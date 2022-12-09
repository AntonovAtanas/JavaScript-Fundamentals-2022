function starEnigma(input) {

    const messagesNumber = Number(input.shift());
    let destroyedPlanets = [];
    let attackedPlanets = [];

    for (let currentMessage of input) {

        const lineLowerCase = currentMessage.toLowerCase();

        let decriptionKey = 0;
        for (const letter of lineLowerCase) {
            if (letter === "s" || letter === "t" || letter === "a" || letter === "r") {
                decriptionKey++
            }
        }
        let decryptedText = '';

        for (let currentChar of currentMessage) {
            let currentCharCode = currentChar.charCodeAt(0);
            let decryptedChar = String.fromCharCode(currentCharCode - decriptionKey);
            decryptedText += decryptedChar;
        }

        const regex = /[^\@\-\!\:\>]*?@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*?:(?<population>\d+)[^\@\-\!\:\>]*?!(?<attackType>[AD])![^\@\-\!\:\>]*?->(?<soldierCount>\d+)[^\@\-\!\:\>]*?/g

        let currentPlanetInfo = regex.exec(decryptedText);

        if (currentPlanetInfo !== null) {

            if (currentPlanetInfo.groups.attackType === "A") {
                attackedPlanets.push(currentPlanetInfo.groups.name)
            } else {
                destroyedPlanets.push(currentPlanetInfo.groups.name)
            }
        }

    }
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.sort((a, b) => a.localeCompare(b))
    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`)
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.sort((a, b) => a.localeCompare(b))
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`)
    }

}

starEnigma(

    // ['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']
    ['3',

        "tt(''DGsvywgerx>6444444444%H%1B9444",

        'GQhrr|A977777(H(TTTT',

        'EHfsytsnhf?8555&I&2C9555SR']

)