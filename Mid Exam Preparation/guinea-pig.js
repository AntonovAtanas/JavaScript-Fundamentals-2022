function guineaPig(input) {

    let startingFood = Number(input.shift()) * 1000
    let startingHay = Number(input.shift()) * 1000
    let startingCover = Number(input.shift()) * 1000
    let guineaPigWeight = Number(input.shift()) * 1000
    let days = 30;
    let dailyEaten = 300
    let daysCounter = 0;
    let isEnough = true;

    for (let i = 1; i <= days; i++) {
        daysCounter++
        startingFood -= dailyEaten

        if (daysCounter % 2 == 0) {
            let hay = startingFood * 0.05
            startingHay -= hay
        }

        if (daysCounter % 3 == 0) {
            let cover = guineaPigWeight / 3;
            startingCover -= cover;
        }

        if (startingFood <= 0 || startingHay <= 0 || startingCover <= 0) {
            console.log(`Merry must go to the pet store!`)
            isEnough = false;
            break;
        }
    }

    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(startingFood / 1000).toFixed(2)}, Hay: ${(startingHay / 1000).toFixed(2)}, Cover: ${(startingCover / 1000).toFixed(2)}.`)
    }
}

guineaPig(["10",
    "5",
    "5.2",
    "1"])



