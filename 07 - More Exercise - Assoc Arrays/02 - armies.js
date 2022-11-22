function armies(input) {

    let army = {}

    input.forEach(line => {
        if (line.includes('arrives')) {
            let leader = line.split(" arrives").shift();
            army[leader] = [[0], {}]
        } else if (line.includes(': ')) {

            let newLine = line.split(': ');
            let leader = newLine.shift();
            let [armyName, armyCount] = newLine[0].split(", ");
            armyCount = Number(armyCount);

            if (army.hasOwnProperty(leader)) {

                if (!army[leader][1][armyName]) {
                    army[leader][1][armyName] = 0
                }
                army[leader][1][armyName] += armyCount
            }

        } else if (line.includes(' + ')) {

            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount)
            for (const key in army) {
                let currentLeaderArmy = army[key][1];
                for (const searchArmy in currentLeaderArmy) {
                    if (currentLeaderArmy.hasOwnProperty(armyName)) {
                        currentLeaderArmy[armyName] += armyCount;
                        break;

                    }
                }
            }

        } else if (line.includes('defeated')) {
            let leader = line.split(' defeated').shift();
            delete army[leader];
        }
    });

    for (const key in army) {
        let armyInfo = army[key]
        for (const currentArmy in armyInfo[1]) {
            armyInfo[0][0] += Number(armyInfo[1][currentArmy]);
        }
    }

    let armyArray = Object.entries(army).sort((armyA, armyB) => armyB[1][0] - armyA[1][0]);
    army = Object.fromEntries(armyArray);

    for (const legend in army) {
        let currentArmy = army[legend][1];
        let currentArmyArray = Object.entries(currentArmy).sort((armyA, armyB) => armyB[1] - armyA[1]);
        console.log(`${legend}: ${army[legend][0]}`)
        for (const armyInfo of currentArmyArray) {
            console.log(`>>> ${armyInfo[0]} - ${armyInfo[1]}`)
        }
    }
}
armies(
    ['Porter arrives',
        'Porter: Legion, 55000',
        'Porter: Retix, 3205',
        'Legion + 302',
        'Rick Burr arrives',
        'Fergus: Wexamp, 30245',
        'Rick Burr: Juard, 50000',
        'Findlay arrives',
        'Findlay: Britox, 34540',
        'Wexamp + 6000',
        'Juard + 1350',
        'Britox + 4500',
        'Rick Burr defeated'
    ]

    // ['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',

    //     'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']
)