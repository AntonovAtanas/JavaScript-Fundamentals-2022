function flightSchedule(input) {

    let allFlightsArray = input[0];
    let changedStatusesArray = input[1];
    let checkFlightStatus = input[2][0];
    let array = [];
    let readyArray = [];

    if (checkFlightStatus === "Ready to fly") {

        allFlightsArray.forEach(element => {
            let [codeFlight, destination] = element.split(' ');

            changedStatusesArray.forEach(currentFlight => {
                let [codeStatus, status] = currentFlight.split(' ');
                if (status !== "Ready to fly") {
                    if (codeFlight === codeStatus) {
                        let indexToDelete = allFlightsArray.indexOf(`${codeFlight} ${destination}`)
                        allFlightsArray.splice(indexToDelete, 1)
                    }
                }
            })
        })

    } else {
        allFlightsArray.forEach(element => {
            let [codeFlight, destination] = element.split(' ');

            changedStatusesArray.forEach(currentFlight => {
                let [codeStatus, status] = currentFlight.split(' ')
                if (codeFlight === codeStatus) {
                    let changedFlightObject = {
                        Destination: destination,
                        Status: status
                    }
                    array.push(changedFlightObject)
                }
            })
        });
    }
    if (checkFlightStatus === "Ready to fly") {
        allFlightsArray.forEach(element => {
            let [code, destination] = element.split(' ');
            element = {
                Destination: destination,
                Status: "Ready to fly"
            }
            readyArray.push(element)
        })
    }

    if (checkFlightStatus === "Ready to fly") {
        readyArray.forEach(element => {
            console.log(element)
        })
    } else {
        array.forEach(element => {
            console.log(element)
        })
    }
}

flightSchedule([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],

['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],

['Ready to fly']])