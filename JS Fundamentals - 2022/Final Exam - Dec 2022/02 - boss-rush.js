function bossRush (input){

    let numberLines = Number(input.shift());
    let pattern = /\|(?<boss>[A-Z]{4,})\|\:\#(?<title>[A-Za-z]+ [A-Za-z]+)\#/g;
    
    for (let i = 0; i < numberLines; i++){
        let command = input.shift();
       
        if (command.match(pattern)){
            let result = command.matchAll(pattern);
            for (const currentPerson of result) {
                console.log(`${currentPerson.groups.boss}, The ${currentPerson.groups.title}`);
                console.log(`>> Strength: ${currentPerson.groups.boss.length}`);
                console.log(`>> Armor: ${currentPerson.groups.title.length}`)
            }
        } else {
            console.log('Access denied!')
        }
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])


// bossRush (['3',
// '|STEFAN|:#H1gh Overseer#',
// '|IVAN|:#Master detective#',
// '|KARL|: #Marketing lead#'])
