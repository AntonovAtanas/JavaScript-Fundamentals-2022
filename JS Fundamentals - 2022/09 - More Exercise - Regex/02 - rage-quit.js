function rageQuit(input) {

    let text = input[0];
    let pattern = /(?<chars>[^0-9]+)(?<num>\d+)/g;
    let finalRes = ''
    let result = text.matchAll(pattern);

    for (const currentResult of result) {
        let res = currentResult[1].split('');
        let repeatNum = Number(currentResult[2]);
        let tempResult = ''
        for (const currentChar of res) {
            tempResult += currentChar.toUpperCase();
        }
        finalRes += (tempResult.repeat(repeatNum));
    }
    console.log(`Unique symbols used: ${[...new Set(finalRes)].length}`)
    console.log(finalRes)
}

rageQuit(['aSd2&a3@1'])