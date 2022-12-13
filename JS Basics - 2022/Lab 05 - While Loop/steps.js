function steps(input) {

    let index = 0;
    let command = input[index];
    index++

    let stepsSum = 0;
    let stepsNeeded = 10000;


    while (command !== "Going home") {
        let stepsCounter = Number(command);
        
        stepsSum += stepsCounter

        if (stepsSum >= stepsNeeded){
            console.log(`Goal reached! Good job!`)
            console.log(`${stepsSum-stepsNeeded} steps over the goal!`)
            break;
        } 
            
        command = input [index]
        index++

    
    }

        if (command === "Going home"){
            let stepsBack = Number(input[index]);
            stepsSum += stepsBack
            
            if (stepsSum >= stepsNeeded){
                console.log(`Goal reached! Good job!`)
                console.log(`${stepsSum-stepsNeeded} steps over the goal!`)
            } else (
                console.log(`${stepsNeeded - stepsSum} more steps to reach goal.`)
            )
        }

}

steps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])