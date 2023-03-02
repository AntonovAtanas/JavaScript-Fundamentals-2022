function printDeckOfCards(cards) {

    let result = [];
    let isValid = true;

    cards.forEach(element => {
        let face = element.slice(0, -1)
        suit = element.slice(-1)

        createCard(face, suit);
    })
    
    function createCard(face, suit) {
        try {
            suit.match(/\b[S|H|D|C]/gm)[0]
            face.match(/\b[2-9]|10|J|Q|K|A/g)[0]
        } catch (err) {
            isValid = false;
            console.log((`Invalid card: ${face}${suit}`));
        };

        let obj = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        result.push(`${face}${obj[suit]}`);
    }
    if (isValid) {
        console.log(result.join(' '));
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);