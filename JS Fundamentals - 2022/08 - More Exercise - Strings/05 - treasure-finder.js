function treasureFinder(input) {

    let key = input.shift().split('').filter(a => a != ' ').map(Number); //optimize it
    let command = input.shift();

    while (command !== "find") {
        let decriptedArray = [];
        let k = 0;
        for (let i = 0; i < command.length; i++) {
            let currentChar = command[i]
            let currentCharCode = currentChar.charCodeAt(0);

            if (k == key.length) {
                k = 0;
            }
            let currentKeyNumber = Number(key[k]);
            k++
            currentCharCode -= currentKeyNumber;
            decriptedArray.push(currentCharCode);

        }
        let finalArray = []
        decriptedArray.forEach(element => {
            let char = String.fromCharCode(element);
            finalArray.push(char)
        });
        let finalString = finalArray.join('')
        let material = finalString.split('&')[1];
        let coordinates = finalString.split('<')[1].slice(0, -1)
        console.log(`Found ${material} at ${coordinates}`)
        command = input.shift();
    }
}

treasureFinder(["1 4 2 5 3 2 1",

    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,

    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",

    "'stj)>34W68Z@",

    "find"])