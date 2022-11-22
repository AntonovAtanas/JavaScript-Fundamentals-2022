function bookshelf(input) {

    let object = {};

    for (let line of input) {

        if (line.includes('->')) {
            let [shelfID, genre] = line.split(' -> ')

            if (!object.hasOwnProperty(shelfID)) {
                object[shelfID] = [[], {}];
                object[shelfID][0].push(genre);
            }
        } else if (line.includes(':')) {
            line = line.replace(",", ":")
            let [title, author, genre] = line.split(': ')

            for (const key in object) {
                if (object[key][0].includes(genre)) {
                    object[key][1][title] = author;
                }
            }
        }
    }
    let objectArr = Object.entries(object).sort((shelfA, shelfB) => {
        let shelfBtoArrLength = Object.entries(shelfB[1][1]).length
        let shelfAtoArrLength = Object.entries(shelfA[1][1]).length
        return shelfBtoArrLength - shelfAtoArrLength;
    })

    for (const iterator of objectArr) {
        let books = Object.entries(iterator[1][1]).sort((bookA, bookB) => bookA[0].localeCompare(bookB[0]));
        let booksCount = books.length;
        console.log(`${iterator[0]} ${iterator[1][0]}: ${booksCount}`);

        for (const book of books) {
            console.log(`--> ${book[0]}: ${book[1]}`)
        }
    }
}

bookshelf(['1 -> mystery', '2 -> sci-fi',

    'Child of Silver: Bruce Rich, mystery',

    'Lions and Rats: Gabe Roads, history',

    'Effect of the Void: Shay B, romance',

    'Losing Dreams: Gail Starr, sci-fi',

    'Name of Earth: Jo Bell, sci-fi'])