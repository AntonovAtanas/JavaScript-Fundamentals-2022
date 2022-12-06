function heroesCode(input) {

    let heroesCount = Number(input.shift());
    let heroesObj = {};

    for (let i = 0; i < heroesCount; i++) {
        let currentLine = input.shift();
        let [hero, healthPoints, manaPoints] = currentLine.split(' ');
        healthPoints = Number(healthPoints);
        manaPoints = Number(manaPoints)

        if (!heroesObj.hasOwnProperty(hero)) {
            heroesObj[hero] = { healthPoints: 0, manaPoints: 0 };
        }

        heroesObj[hero]['healthPoints'] += healthPoints;
        heroesObj[hero]['manaPoints'] += manaPoints;
    }

    let command = input.shift();

    while (command !== 'End') {
        let splittedCommand = command.split(' - ');
        let currentCommand = splittedCommand[0];
        let heroName = splittedCommand[1];

        switch (currentCommand) {
            case 'Heal':
                let amount = Number(splittedCommand[2]);

                if (amount + heroesObj[heroName].healthPoints > 100) {
                    console.log(`${heroName} healed for ${100 - heroesObj[heroName].healthPoints} HP!`);
                    heroesObj[heroName].healthPoints = 100;
                } else {
                    heroesObj[heroName].healthPoints += amount;
                    console.log(`${heroName} healed for ${amount} HP!`)
                }
                break;

            case 'Recharge':
                let manaRecharged = Number(splittedCommand[2]);

                if (manaRecharged + heroesObj[heroName].manaPoints > 200) {
                    console.log(`${heroName} recharged for ${200 - heroesObj[heroName].manaPoints} MP!`);
                    heroesObj[heroName].manaPoints = 200;
                } else {
                    heroesObj[heroName].manaPoints += manaRecharged;
                    console.log(`${heroName} recharged for ${manaRecharged} MP!`)
                }
                break;

            case 'TakeDamage':
                let damage = Number(splittedCommand[2]);
                let attacker = splittedCommand[3];
                heroesObj[heroName].healthPoints -= damage;
                if (heroesObj[heroName].healthPoints <= 0) {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroesObj[heroName];
                } else {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[heroName].healthPoints} HP left!`)
                }
                break;

            case 'CastSpell':
                let mpNeeded = Number(splittedCommand[2]);
                let spellName = splittedCommand[3];
                if (heroesObj[heroName].manaPoints < mpNeeded) {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                } else {
                    heroesObj[heroName].manaPoints -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].manaPoints} MP!`)
                }
                break;
        }
        command = input.shift();
    }

    for (const key in heroesObj) {
        console.log(`${key}`);
        console.log(`  HP: ${heroesObj[key]['healthPoints']}`);
        console.log(`  MP: ${heroesObj[key]['manaPoints']}`)
    }
}

heroesCode(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
    ]
)