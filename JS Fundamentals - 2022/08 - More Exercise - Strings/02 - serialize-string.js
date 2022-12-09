function serializeString(input) {

    let serializeObject = {};
    let word = input.shift();

    for (let i = 0; i < word.length; i++) {
        let currentChar = word[i];

        if (!serializeObject[currentChar]) {
            serializeObject[currentChar] = [];
        }
        serializeObject[currentChar].push(i)
    }

    for (const key in serializeObject) {
        console.log(`${key}:${serializeObject[key].join('/')}`)
    }
}

serializeString(["avjavamsdmcalsdm"])