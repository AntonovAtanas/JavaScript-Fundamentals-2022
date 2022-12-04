function santaHelper(input) {

    let key = Number(input.shift());
    let encryptedMessage = input.shift();

    while (encryptedMessage !== 'end') {
        let decryptedMessage = ''
        for (const currentChar of encryptedMessage) {
            let asciiCode = currentChar.charCodeAt(0);
            decryptedMessage += String.fromCharCode(asciiCode - key);
        }
        let pattern = /\@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*\!(?<behavior>[GN]{1})\!/g;
        let name = decryptedMessage.matchAll(pattern);

        for (const currentChild of name) {
            if (currentChild.groups.behavior == 'G') {
                console.log(currentChild[1])
            }
        }
        encryptedMessage = input.shift();
    }
}

santaHelper(

    // ['3',

    //     'CNdwhamigyenumje$J$',

    //     'CEreelh-nmguuejnW$J$',

    //     'CVwdq&gnmjkvng$Q$',

    //     'end']

    ['3',

    'N}eideidmk$\'(mnyenmCNlpamnin$J$',

    'ddddkkkkmvkvmCFrqqru- nvevek$J$nmgievnge',

    'ppqmkkkmnolmnnCEhq/vkievk$Q$',

    'yyegiivoguCYdohqwlqh/kguimhk$J$',

    'end']
)