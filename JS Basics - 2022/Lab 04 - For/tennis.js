function tennis (input){


    let tournaments = Number(input[0]) ; 
    let startingPoints = Number(input[1]) ;
    let totalWins = 0;
    let totalFinalist = 0;
    let totalSemiFinalist = 0;
    let totalW = 0;

    

    for (let i = 2 ; i < tournaments + 2 ; i++){

        let playedTournaments = input[i]

        if (playedTournaments === "W"){
            totalWins += 2000
            totalW += 1
        } else if (playedTournaments === "F"){
            totalFinalist += 1200
        } else if (playedTournaments === "SF"){
            totalSemiFinalist += 720
        }
       
    }

   let totalPoints = startingPoints + totalWins + totalFinalist + totalSemiFinalist

   console.log(`Final points: ${totalPoints}`)
   console.log(`Average points: ${Math.floor((totalWins + totalFinalist + totalSemiFinalist) / tournaments)}`)
   console.log(`${((totalW / tournaments)*100).toFixed(2)}%`)


}

tennis (["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])