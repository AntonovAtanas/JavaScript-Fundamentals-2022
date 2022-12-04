function postOffice(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let capitalLettersPattern = /(?<capitalLetters>\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g;
    let allCapitalLetters = '';
    let asciiLengthObjecet = {}
    thirdPart = thirdPart.split(' ')
    let capitalLetters = firstPart.matchAll(capitalLettersPattern);

    for (const iterator of capitalLetters) {
        allCapitalLetters += iterator.groups.capitalLetters;
    }
    allCapitalLetters = allCapitalLetters.substring(1, -1)
    let asciiLengthPattern = /(?<ascii>[7-8][0-9]|90|65|66|67|68|69):(?<length>[0-1][1-9]|20|10)/g
    let asciiLength = secondPart.matchAll(asciiLengthPattern);

    for (const currentPair of asciiLength) {
        let asciiNum = Number(currentPair.groups.ascii);
        let letter = String.fromCharCode(asciiNum);
        let length = Number(currentPair.groups.length);
        asciiLengthObjecet[letter] = length
    }

    for (const iterator of thirdPart) {
        let currentFirstChar = iterator[0];
        if (asciiLengthObjecet.hasOwnProperty(currentFirstChar) && asciiLengthObjecet[currentFirstChar] + 1 == iterator.length) {
            console.log(iterator);
        }
    }
}

// postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds 84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');

postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])