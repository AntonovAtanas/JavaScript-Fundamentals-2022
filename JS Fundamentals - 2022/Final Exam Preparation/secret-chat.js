function secretChat(input) {

    let initialMessage = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {

        if (command.includes('ChangeAll')) {
            let [currentCommand, substr, replacement] = command.split(':|:');
            while (initialMessage.includes(substr)) {
                initialMessage = initialMessage.replace(substr, replacement)
            }
            console.log(initialMessage)
        } else if (command.includes('Reverse')) {
            let [currentCommand, substring] = command.split(':|:');
            if (initialMessage.includes(substring)) {
                initialMessage = initialMessage.replace(substring, '');
                substring = substring.split('').reverse().join('');
                initialMessage = initialMessage + substring
                console.log(initialMessage)
            } else {
                console.log('error');
            }
        } else if (command.includes('InsertSpace')) {
            let [currentCommand, index] = command.split(':|:');
            index = Number(index);
            let buff = ' '
            initialMessage = initialMessage.split('');
            initialMessage.splice(index, 0, buff);
            initialMessage = initialMessage.join('');
            console.log(initialMessage)
        }

        command = input.shift();
    }
    console.log(`You have a new text message: ${initialMessage}`)
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)