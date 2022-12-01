function race(input) {

    let names = input.shift().split(', ');
    let result = {};
    let regexName = /[A-Za-z]+/g;
    let regexDistance = /\d{1}/g;

    for (const name of names) {
        result[name] = 0;
    }

    let command = input.shift();

    while (command !== 'end of race') {
        let currentPersonDistance = 0;
        let foundName = command.match(regexName).join('');
        let foundDistance = command.match(regexDistance).map(n => currentPersonDistance += Number(n));

        if (result.hasOwnProperty(foundName)) {
            result[foundName] += currentPersonDistance
        }
        command = input.shift();
    }

    let resultArr = Object.entries(result).sort((personA, personB) => personB[1] - personA[1]);

    console.log(`1st place: ${resultArr[0][0]}`)
    console.log(`2nd place: ${resultArr[1][0]}`)
    console.log(`3rd place: ${resultArr[2][0]}`)
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

    'Mi*&^%$ch123o!#$%#nne787) ',

    '%$$B(*&&)i89ll)*&) ',

    'R**(on%^&ald992) ',

    'T(*^^%immy77) ',

    'Ma10**$#g0g0g0i0e',

    'end of race'])