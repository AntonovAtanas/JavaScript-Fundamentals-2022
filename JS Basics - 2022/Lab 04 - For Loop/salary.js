function salary (input){

    let tabsOpen = Number (input[0]);
    let totalSalary = Number (input[1]);
    let penaltyFee = 0;


    for (let i = 2 ; i <= tabsOpen; i++){

        let forbiddenWebsites = input[i]

        if (forbiddenWebsites === "Facebook"){
            penaltyFee += 150;
        } if (forbiddenWebsites === "Instagram"){
            penaltyFee += 100
        } if (forbiddenWebsites === "Reddit"){
            penaltyFee += 50
        } if (penaltyFee >= totalSalary){
            console.log("You have lost your salary.")
            return;
        } 
    }

    console.log(totalSalary - penaltyFee)


}

salary (["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])