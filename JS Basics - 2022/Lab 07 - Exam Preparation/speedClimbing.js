function speedClimbing (input){


    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let secondsFor1meter = Number(input[2]);


    let totalSecondsNeeded = distance * secondsFor1meter
    
    let slowingSeconds = Math.floor(distance / 50) * 30

    let finalTime = totalSecondsNeeded + slowingSeconds

    if (finalTime < recordTime){
        console.log(`Yes! The new record is ${(finalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(finalTime - recordTime).toFixed(2)} seconds slower.`)
    }

}

speedClimbing (["1377",

"389",

"3"])

