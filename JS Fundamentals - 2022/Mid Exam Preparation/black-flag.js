function blackFlag(input) {

    let plunderDays = Number(input[0]);
    let plunderPerDay = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let plunderCounter = 0;
    let daysCounter = 0;

    for (let i = 1; i <= plunderDays; i++) {
        daysCounter++
        plunderCounter += plunderPerDay;

        if (daysCounter % 3 == 0) {
            plunderCounter += plunderPerDay / 2
        }

        if (daysCounter % 5 == 0) {
            let lostPlunder = plunderCounter * 0.30;
            plunderCounter -= lostPlunder;
        }
    }

    if (plunderCounter >= expectedPlunder) {
        console.log(`Ahoy! ${plunderCounter.toFixed(2)} plunder gained.`)
    } else {
        let percentagePlundered = (plunderCounter * 100) / expectedPlunder
        console.log(`Collected only ${percentagePlundered.toFixed(2)}% of the plunder.`)
    }
}

blackFlag(["10", "20", "380"])