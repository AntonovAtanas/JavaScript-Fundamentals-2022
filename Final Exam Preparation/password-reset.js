function passwordReset(input) {

    let text = input.shift();
    let command = input.shift();

    while (command !== 'Done') {
        if (command == 'TakeOdd') {
            let textArr = text.split('');
            text = '';
            textArr.forEach((element, index) => {
                if (index % 2 !== 0) {

                    text += element;
                }
            });
            console.log(text)   
        } else if (command.includes('Cut')) {
            let [currentCommand, index, length] = command.split(' ');

            index = Number(index);
            length = Number(length);

            text = text.substring(0, index) + text.substring(index + length);

            console.log(text)
        } else if (command.includes('Substitute')) {
            let [currentCommand, substr, substitute] = command.split(' ');

            if (text.includes(substr)) {
                while (text.includes(substr)) {
                    text = text.replace(substr, substitute);
                }
                console.log(text)
            } else {
                console.log('Nothing to replace!')
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${text}`)
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
