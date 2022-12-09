function houseParty (input){

    let array = [];

    for (let i = 0; i < input.length; i++){
        let command = input[i];
        let splittedCommand = command.slice(0).toString().split(' ');

        if (command.includes('is going!')){
            if (array.includes(splittedCommand[0])){
                console.log(`${splittedCommand[0]} is already in the list!`)
            } else {
                array.push(splittedCommand[0])
            }
            
        } else if (command.includes('is not going!')){
            if (array.includes(splittedCommand[0])){
                array.splice(array.indexOf(splittedCommand[0]), 1);
            } else {
                console.log(`${splittedCommand[0]} is not in the list!`)
            }
        }
    }
    console.log(array.join(' \n'))
}

houseParty (['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])