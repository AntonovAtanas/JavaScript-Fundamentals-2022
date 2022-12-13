function bestPlayer (input){


    let index = 0;
    let command = input[index]
    index++

    // let command = input[index]
    // index++

    let playerName = "";
    let playerGoals = 0;

    while (command !== "END"){
        
        let player = command
        let goals = Number(input[index])
        
        index++
        
            if (goals > playerGoals){
                playerName = player;
                playerGoals = goals;
            }

            if (playerGoals >= 10){
                break;
            }
            
        command = input[index]
        index++
    }

    
    console.log(`${playerName} is the best player!`)
    
        if (playerGoals >= 3){
            console.log(`He has scored ${playerGoals} goals and made a hat-trick !!!`)
        } else {
            console.log(`He has scored ${playerGoals} goals.`)
        }

}

bestPlayer (["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])


