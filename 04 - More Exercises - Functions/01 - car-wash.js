function carWash(input) {

    let startClean = 0;
    let soap = 10;
    let water = 0.20;
    let vacuumCleaner = 0.25;
    let mud = 0.10;

    inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let command = input[i];

        switch (command) {
            case "soap": startClean += soap; break;
            case "water": startClean += (startClean * water); break;
            case "vacuum cleaner": startClean += (startClean * vacuumCleaner); break;
            case "mud": startClean -= (startClean * mud); break;
        }
    }

    console.log(`The car is ${startClean.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"])