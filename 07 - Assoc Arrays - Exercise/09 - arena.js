function arenaTier(input) {

    let arena = {};
    let currentLine = input.shift();

    while (currentLine !== "Ave Cesar") {

        if (currentLine.includes('vs')) {
            let [gladiatorOne, gladiatorTwo] = currentLine.split(' vs ')
            if (arena.hasOwnProperty(gladiatorOne) && arena.hasOwnProperty(gladiatorTwo)) {

                let totalGladiatorOnePoints = 0;
                let totalGladiatortwoPoints = 0;

                for (const key in arena[gladiatorOne]) {
                    let currentSkill = key;
                    let currentSkillPoints = arena[gladiatorOne][key];
                    for (const skill in arena[gladiatorTwo]) {
                        let compareSkill = skill;
                        let compareSkillPoints = arena[gladiatorTwo][skill];
                        if (currentSkill === compareSkill) {
                            totalGladiatorOnePoints += currentSkillPoints;
                            totalGladiatortwoPoints += compareSkillPoints
                        }
                    }
                }
                if (totalGladiatorOnePoints > totalGladiatortwoPoints) {
                    delete arena[gladiatorTwo]
                } else if (totalGladiatorOnePoints < totalGladiatortwoPoints) {
                    delete arena[gladiatorOne]
                }
            }
        } else {
            let [name, technique, skillPoints] = currentLine.split(' -> ');
            skillPoints = Number(skillPoints)
            if (!arena.hasOwnProperty(name)) {
                arena[name] = {};
            }
            if (!arena[name].hasOwnProperty(technique)) {
                arena[name][technique] = skillPoints;
            } else if (arena[name].hasOwnProperty(technique)) {

                if (arena[name][technique] < skillPoints) {
                    arena[name][technique] = skillPoints
                }
            }
        }
        currentLine = input.shift();
    }

    for (const key in arena) {
        let totalSkill = 0;

        for (let skill in arena[key]) {
            let skillPoints = Number(arena[key][skill]);
            totalSkill += skillPoints
        }
        arena[key]['points'] = totalSkill
    }
    // first ordered by total skill in descending order, then ordered by name in ascending order

    let arenaArray = Object.entries(arena)

    arenaArray.forEach(gladiator => {
        let gladiatorSkillsArray = Object.entries(gladiator[1])
        gladiatorSkillsArray.sort((techniqueA, techniqueB) => techniqueB[1] - techniqueA[1] || techniqueA[0].localeCompare(techniqueB[0]));
        let gladiatorSkills = Object.fromEntries(gladiatorSkillsArray);
        arena[gladiator[0]] = gladiatorSkills
    });

    arenaArray = Object.entries(arena).sort((gladiatorA, gladiatorB) => gladiatorB[1]["points"] - gladiatorA[1]["points"] || gladiatorA[0].localeCompare(gladiatorB[0]));

    arena = Object.fromEntries(arenaArray)

    for (const key in arena) {
        console.log(`${key}: ${arena[key]["points"]} skill`)
        delete arena[key]["points"]
        let insideObject = arena[key];

        for (const insideObj in insideObject) {
            console.log(`- ${insideObj} <!> ${insideObject[insideObj]}`)
        }
    }
}

arenaTier(
    // [
    //     'Peter -> Duck -> 400',
    //     'Julius -> Shield -> 150',
    //     'Gladius -> Heal -> 200',
    //     'Gladius -> Support -> 250',
    //     'Gladius -> Shield -> 250',
    //     'Peter vs Gladius',
    //     'Gladius vs Julius',
    //     'Gladius vs Maximilian',
    //     'Ave Cesar'
    // ]

    [

        'Peter -> BattleCry -> 400',

        'Alex -> PowerPunch -> 300',

        'Stefan -> Duck -> 200',

        'Stefan -> Tiger -> 250',

        'Ave Cesar'

    ]
)