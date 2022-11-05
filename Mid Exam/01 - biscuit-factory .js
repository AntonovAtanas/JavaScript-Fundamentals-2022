function biscuitFactory(input) {

    let biscuitsPerDayPerWorker = Number(input.shift());
    let workers = Number(input.shift());
    let competingFactoryBiscuits = Number(input.shift());
    let days = 30;
    let biscuitsProduced = 0;

    for (let i = 1; i <= days; i++) {
        let dailyBiscuits = biscuitsPerDayPerWorker * workers;
        if (i % 3 == 0) {
            let biscuitsOnThirdDay = Math.floor(dailyBiscuits * 0.75);
            biscuitsProduced += biscuitsOnThirdDay
        } else {
            biscuitsProduced += dailyBiscuits
        }
    }

    console.log(`You have produced ${biscuitsProduced} biscuits for the past month.`)

    let difference = Math.abs((biscuitsProduced - competingFactoryBiscuits) / competingFactoryBiscuits * 100);

    if (biscuitsProduced > competingFactoryBiscuits) {
        console.log(`You produce ${difference.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${(difference.toFixed(2))} percent less biscuits.`)
    }

}
biscuitFactory(["78",
    "8",
    "16000"])


