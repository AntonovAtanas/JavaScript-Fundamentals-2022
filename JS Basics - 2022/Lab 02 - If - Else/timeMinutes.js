function timeMinutes (input){

    let hours = Number(input[0])
    let minutes = Number(input[1])
    let hoursToMinutes = hours * 60
    let futureHour = hoursToMinutes + minutes + 15
    let finalhours = Math.floor(futureHour / 60)
    let finalMinutes = futureHour % 60

    if (finalhours > 23){
        finalhours = 0
    }

    if (finalMinutes < 10){
        finalMinutes = "0" + finalMinutes
    }

    console.log(`${finalhours}:${finalMinutes}`);
    
}

timeMinutes(["12", "49"])