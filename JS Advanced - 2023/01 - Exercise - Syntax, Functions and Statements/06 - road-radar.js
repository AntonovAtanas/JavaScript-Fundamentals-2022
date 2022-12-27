function roadRadar(speed, area) {

    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    const speeding = 20;
    const excessiveSpeeding = 40;

    if (area == 'motorway') {
        if (speed > motorway) {
            if (speed - motorway <= speeding){
                console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - speeding`);
            } else if (speed - motorway <= excessiveSpeeding){
                console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }
    }   else if (area == 'interstate'){
        if (speed > interstate) {
            if (speed - interstate <= speeding){
                console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - speeding`);
            } else if (speed - interstate <= excessiveSpeeding){
                console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }
    } else if (area == 'city'){
        if (speed > city) {
            if (speed - city <= speeding){
                console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - speeding`);
            } else if (speed - city <= excessiveSpeeding){
                console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - city} km/h faster than the allowed speed of ${city} - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }
    } else {
        if (speed > residential) {
            if (speed - residential <= speeding){
                console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - speeding`);
            } else if (speed - residential <= excessiveSpeeding){
                console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - reckless driving`);
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');