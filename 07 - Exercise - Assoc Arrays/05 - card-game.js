function cardGame(input) {

    let personInfo = {};
    let finalInfo = {};

    input.forEach(element => {
        let currentPerson = element.split(': ')
        let personName = currentPerson.shift();

        currentPerson.forEach(element => {
            let cards = element.split(', ');

            cards.forEach(element => {
                if (personInfo.hasOwnProperty(personName)) {
                    personInfo[personName] += `${element} `
                } else {
                    personInfo[personName] = `${element} `
                }
            })
        });
    });

    for (const personName in personInfo) {
        let array = personInfo[personName].split(' ');
        array.pop()
        let uniqueCards = new Set(array)

        for (const card of uniqueCards) {

            let isDigit = !isNaN(card[0])
            let lastLetter = card[card.length - 1];
            let firstLetter = card.slice(0, -1);

            switch (lastLetter) {
                case "C": lastLetter = 1; break;
                case "H": lastLetter = 3; break;
                case "S": lastLetter = 4; break;
                case "D": lastLetter = 2; break;
            }

            switch (firstLetter) {
                case "J": firstLetter = 11; break;
                case "Q": firstLetter = 12; break;
                case "K": firstLetter = 13; break;
                case "A": firstLetter = 14; break;
            }

            if (isDigit) {
                sum = Number(firstLetter) * Number(lastLetter)
            } else {
                sum = Number(firstLetter) * Number(lastLetter)
            }

            if (finalInfo.hasOwnProperty(personName)) {
                finalInfo[personName] += sum;
            } else {
                finalInfo[personName] = sum
            }

        }
    }
    for (const key in finalInfo) {
        console.log(`${key}: ${finalInfo[key]}`)
    }
}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])