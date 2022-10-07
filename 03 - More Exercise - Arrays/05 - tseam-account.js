function tseamAccount (input){

    let account = input.shift();
    let accArray = account.split(" ")

    let commandArray = input.join(' ').split(' ');

    let index = 0;
    let command = commandArray[index];
    

    while (command !== "Play!"){
        let action = commandArray[index];
        index++
        let game = commandArray[index];
        index++

        if (action === "Install"){
            if (accArray.includes(game)){
            } else {
                accArray.push(game)
            }
        } else if (action === "Uninstall"){
            accArray = accArray.filter(i => i != game)
        } else if (action === "Update"){
            if (accArray.includes(game)){
                accArray = accArray.filter(i => i != game);
                accArray.push(game)
            }
        } else if (action === "Expansion"){
            let expansionGame = game.split('-')
            if (accArray.includes(expansionGame[0])){
                let whenGameHasExpansion = game.split('-')
                whenGameHasExpansion = whenGameHasExpansion.join(':')
                let indexOfGame = accArray.indexOf(expansionGame[0]);
                accArray.splice(indexOfGame+1, 0, whenGameHasExpansion)
            }
        }
        command = commandArray[index];
    }

    console.log(accArray.join(' '))
}

tseamAccount (['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!'])