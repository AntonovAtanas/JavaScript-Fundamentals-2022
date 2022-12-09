function mirrorWords(input) {

    let text = input.shift();
    let pattern = /([\@\#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let result = text.matchAll(pattern);
    let mirrorObj = {};
    let mirrorCounter = 0;
    let pairsCounter = 0;
    let resultArr = [];

    for (const currentPair of result) {
        pairsCounter++
        let reversedSecondWord = currentPair.groups.wordTwo.split('').reverse().join('')

        if (reversedSecondWord === currentPair.groups.wordOne) {
            mirrorObj[currentPair.groups.wordOne] = currentPair.groups.wordTwo;
            mirrorCounter++
        }
    }

    if (pairsCounter == 0) {
        console.log('No word pairs found!')
    } else {
        console.log(`${pairsCounter} word pairs found!`)
    }

    if (mirrorCounter == 0) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:')
        for (const kvp in mirrorObj) {
            resultArr.push(`${kvp} <=> ${mirrorObj[kvp]}`)
        }
        console.log(resultArr.join(', '))
    }
}

mirrorWords(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]

    // // [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]

    // ['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']
)