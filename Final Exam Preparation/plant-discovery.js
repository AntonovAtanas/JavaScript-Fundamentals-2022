function plantDiscovery(input) {

    let linesCount = Number(input.shift());
    let plantInfo = {}

    for (let i = 0; i < linesCount; i++) {
        let [plant, rarity] = input.shift().split('<->')
        if (!plantInfo[plant]) {
            plantInfo[plant] = [[], []];
        }
        plantInfo[plant] = [[rarity], []];
    }

    let command = input.shift();

    while (command !== 'Exhibition') {

        if (command.includes('Reset')) {
            let [currentCommand, plant] = command.split(': ')
            if (!plantInfo[plant]) {
                console.log('error')
            } else {
                plantInfo[plant][1] = []
            }
        } else if (command.includes('Rate')) {
            let [rate, rest] = command.split(': ');
            let [plant, rating] = rest.split(' - ');
            if (!plantInfo[plant]) {
                console.log(' ')
            } else {
                plantInfo[plant][1].push(Number(rating))
            }
        } else if (command.includes('Update')) {
            let [rate, rest] = command.split(': ');
            let [plant, rarity] = rest.split(' - ');
            if (!plantInfo[plant]) {
                console.log('error')
            } else {
                plantInfo[plant][0] = [Number(rarity)]
            }
        }
        command = input.shift();
    }

    console.log('Plants for the exhibition:')
    for (const key in plantInfo) {
        let totalScore = 0;
        for (const iterator of plantInfo[key][1]) {
            totalScore += iterator
        }
        if (totalScore / plantInfo[key][1].length) {
            console.log(`- ${key}; Rarity: ${plantInfo[key][0]}; Rating: ${(totalScore / plantInfo[key][1].length).toFixed(2)}`)
        } else {
            console.log(`- ${key}; Rarity: ${plantInfo[key][0]}; Rating: ${(0).toFixed(2)}`)
        }
    }
}

plantDiscovery
    // (["3",

    //     "Arnoldii<->4",

    //     "Woodii<->7",

    //     "Welwitschia<->2",

    //     "Rate: Woodii - 10",

    //     "Rate: Welwitschia - 7",

    //     "Rate: Arnoldii - 3",

    //     "Rate: Woodii - 5",

    //     "Update: Woodii - 5",

    //     "Reset: Arnoldii",

    //     "Exhibition"])

    (["3",

        "Candelabra<->10",
        "Candelabra<->20",
        "Oahu<->10",

        "Rate: Oahu - 7",

        "Rate: Candelabra - 6",

        "Update: Candelabra - 5",
        "Reset: Oahu",

        "Exhibition"])