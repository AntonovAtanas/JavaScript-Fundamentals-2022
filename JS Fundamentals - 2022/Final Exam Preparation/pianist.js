function pianist(input) {

    const pieces = Number(input.shift());
    let collection = {};

    for (let i = 0; i < pieces; i++) {
        let currentPiece = input.shift();
        let [piece, composer, key] = currentPiece.split('|');
        collection[piece] = { composer: composer, key: key }
    }

    let currentCommand = input.shift();

    while (currentCommand !== 'Stop') {

        let commandArr = currentCommand.split('|');
        let command = commandArr[0];
        let piece = commandArr[1];

        switch (command) {
            case 'Add':
                let composer = commandArr[2];
                let key = commandArr[3];
                if (!collection.hasOwnProperty(piece)) {
                    collection[piece] = { composer: composer, key: key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }
                break;

            case 'Remove':
                if (!collection.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                } else {
                    delete collection[piece]
                    console.log(`Successfully removed ${piece}!`)
                }
                break;

            case 'ChangeKey': {
                let key = commandArr[2];
                if (!collection.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                } else {
                    collection[piece]['key'] = key;
                    console.log(`Changed the key of ${piece} to ${key}!`)
                }
                break;
            }
        }
        currentCommand = input.shift();
    }

    for (const key in collection) {
        console.log(`${key} -> Composer: ${collection[key].composer}, Key: ${collection[key].key}`)
    }
}

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)