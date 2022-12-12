function oscars(input) {

    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    let actorTotalPoints = startingPoints;
   
    for (let i = 3; i < input.length; i += 2){
        let juryName = input[i]
        let juryPoints = Number(input[i + 1])

        let juryTotalPoints = juryName.length * juryPoints / 2
        actorTotalPoints += juryTotalPoints 
        
        if (actorTotalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorTotalPoints.toFixed(1)}!`)
            return;
        }
    }

    let missingPoints = 1250.5 - actorTotalPoints
    console.log(`Sorry, ${actorName} you need ${missingPoints.toFixed(1)} more!`)


}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
