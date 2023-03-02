function cardFactory(face, suit) {

    if (!face.match(/\b[2-9]|10|J|Q|K|A/g)) {
        throw new Error('Error');
    };

    let obj = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    return `${face}${obj[suit]}`
}

console.log(cardFactory('A', 'S'));
console.log(cardFactory('10', 'H'));
console.log(cardFactory('1', 'C'));