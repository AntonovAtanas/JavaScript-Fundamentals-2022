function radioCrystals(input) {

    let desiredThickness = input[0];

    let cut = 0.25; // cuts the crystal in 4
    let lap = 0.20; // removes 20% thickness
    let grind = 20; // removes 20 microns
    let etch = 2; // removes 2 microns
    let xRay = 1; // increase thickness by 1 - can be used only once



    for (let i = 1; i < input.length; i++) {

        let chunkThickness = input[i];

        let cutsCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xRayCounter = 0;

        console.log(`Processing chunk ${chunkThickness} microns`);

        while (chunkThickness > desiredThickness) {

            while (chunkThickness * cut >= desiredThickness) {
                chunkThickness *= cut;
                cutsCounter++
            }
           
            if (cutsCounter > 0){
            console.log(`Cut x${cutsCounter}`)
            chunkThickness = Math.floor(chunkThickness);
            console.log('Transporting and washing')}

            if (chunkThickness == desiredThickness) {
                console.log(`Finished crystal ${chunkThickness} microns`)
                break;
            }

            while (chunkThickness - (chunkThickness * lap) >= desiredThickness) {
                chunkThickness -= (chunkThickness * lap);
                lapCounter++
            }

            if (lapCounter > 0){
            console.log(`Lap x${lapCounter}`)
            chunkThickness = Math.floor(chunkThickness);
            console.log('Transporting and washing')}

            if (chunkThickness == desiredThickness) {
                console.log(`Finished crystal ${chunkThickness} microns`)
                break;
            }
            while (chunkThickness - grind >= desiredThickness) {
                chunkThickness -= grind;
                grindCounter++
            }

            if (grindCounter > 0){
            console.log(`Grind x${grindCounter}`)
            chunkThickness = Math.floor(chunkThickness);
            console.log('Transporting and washing')}

            if (chunkThickness == desiredThickness) {
                console.log(`Finished crystal ${chunkThickness} microns`)
                break;
            }

            while (chunkThickness > desiredThickness) {
                chunkThickness -= etch;
                etchCounter++
            }
            if (etchCounter > 0){
            console.log(`Etch x${etchCounter}`)
            chunkThickness = Math.floor(chunkThickness);
            console.log('Transporting and washing')}

            if (desiredThickness - chunkThickness == 1) {
                chunkThickness += xRay
                xRayCounter++
                console.log(`X-ray x${xRayCounter}`)
            }
            console.log(`Finished crystal ${chunkThickness} microns`)
        }
    }

}

radioCrystals([1000, 4000, 8100])