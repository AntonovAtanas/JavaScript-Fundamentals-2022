function imitationGame(input) {

    let cryptedMessage = input.shift();
    let command = input.shift();

    while (command !== 'Decode') {
        let commandArr = command.split('|');
        let condition = commandArr[0];
        switch (condition) {
            case 'Move':
                let numberLetters = Number(commandArr[1]);
                let cryptedMessageArr = cryptedMessage.split('');
                for (let i = 0; i < numberLetters; i++) {
                    let currentChar = cryptedMessageArr.shift();
                    cryptedMessageArr.push(currentChar)
                }
                cryptedMessage = cryptedMessageArr.join('')
                break;

            case 'Insert':
                let index = Number(commandArr[1]);
                let char = commandArr[2];
                cryptedMessage = cryptedMessage.substring(0, index) + char + cryptedMessage.substring(index);
                break;

            case 'ChangeAll':
                let changeChar = commandArr[1];
                let newChar = commandArr[2];
                while (cryptedMessage.includes(changeChar)) {
                    cryptedMessage = cryptedMessage.replace(changeChar, newChar)
                }
                break;
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${cryptedMessage}`)
}

imitationGame([

    'owyouh',

    'Move|2',

    'Move|3',

    'Insert|3|are',

    'Insert|9|?',

    'Decode'])