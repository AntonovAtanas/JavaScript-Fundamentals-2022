function swimming (input){

    let recordTimeInSeconds = Number(input[0])
    let distanceInMeters = Number(input[1])
    let secondsPerMeter = Number(input[2])

    let totalTimeWithoutSlowing = distanceInMeters * secondsPerMeter

    let howManySlows = Math.floor(distanceInMeters / 15)
    let SlowingTotal = howManySlows * 12.5

    let clearTime = totalTimeWithoutSlowing + SlowingTotal

    if (clearTime < recordTimeInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${clearTime.toFixed(2)} seconds.`)
    } else {
        console.log (`No, he failed! He was ${(clearTime - recordTimeInSeconds).toFixed(2)} seconds slower.`)
    }

   
}

swimming (["10464",

"1500",

"20"])