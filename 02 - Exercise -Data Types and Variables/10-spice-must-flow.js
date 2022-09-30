function spiceFlow (startingYield){

    let startYield = startingYield;
    let profitableSource = 100;
    let yieldDrop = 10;
    let crewConsumation = 26;
    let daysCounter = 0;
    let spiceExtracted = 0;

        while (startYield >= profitableSource){

            spiceExtracted += startYield;
            spiceExtracted -= crewConsumation;
            startYield -= yieldDrop;
            daysCounter++
        }

        if (spiceExtracted >= 26){
            spiceExtracted -= crewConsumation;
        }

        console.log(daysCounter)
        console.log(spiceExtracted)
}

spiceFlow (450)