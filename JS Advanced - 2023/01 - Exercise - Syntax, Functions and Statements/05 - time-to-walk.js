function timeToWalk(steps, stepInMeter, speed) {

    let mToUniversity = (steps * stepInMeter);
    let delayMinutes = Math.floor(mToUniversity / 500);
    let speedMetersInSec = speed / 3.6;
    let time = mToUniversity / speedMetersInSec;

    let minutes = Math.floor(time / 60);
    let seconds = Number(time - (minutes * 60)).toFixed(0);
    let hours = Math.floor(time / 3600);
    minutes += delayMinutes;
    hours += Math.floor(minutes / 60);
    minutes %= 60;

    let formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

timeToWalk(2564, 0.70, 5.5)