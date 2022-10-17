function loadingBar (input){

    let percentage = input;
    let percentageSymbols = input / 10;
    let fullDots = 10;

    if (input >= 100){
        console.log(`100% Complete!`)
        console.log(`${percentage}% [${"%".repeat(percentageSymbols)}${".".repeat(fullDots-percentageSymbols)}]`)
    } else {
        console.log(`${percentage}% [${"%".repeat(percentageSymbols)}${".".repeat(fullDots-percentageSymbols)}]`)
        console.log(`Still loading...`)
    }
}

loadingBar(30)