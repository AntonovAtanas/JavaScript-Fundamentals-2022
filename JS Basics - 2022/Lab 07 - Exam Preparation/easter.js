function easter(input) {

    let index = 0;
    let totalChefs = Number(input[index]);
    index++

    let command = input[index];
    index++

    let tempChef = "";
    let tempScore = 0;



    for (let i = 0; i < totalChefs; i++) {

        let chefName = command

        command = input[index];
        index++

        
        let totalSumChef = 0;

        while (command !== "Stop") {
            chef = command
            totalSumChef += Number(command)

            command = input[index];
            index++

        }

        command = input[index];
        index++
        
        console.log(`${chefName} has ${totalSumChef} points.`)

        if (totalSumChef > tempScore) {
            tempChef = chefName;
            tempScore = totalSumChef
            console.log(`${chefName} is the new number 1!`)
        }

    }

    console.log(`${tempChef} won competition with ${tempScore} points!`)
}

easter(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

