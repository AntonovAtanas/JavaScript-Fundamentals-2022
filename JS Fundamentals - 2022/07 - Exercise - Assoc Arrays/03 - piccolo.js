function piccolo(input) {

    let parking = {};

    input.forEach(element => {
        let [command, carNumber] = element.split(', ');

        if (command === "IN") {
            parking[carNumber] = carNumber;
        } else {
            delete parking[carNumber]
        }
    });

    let parkingArray = Object.entries(parking).sort(([a], [b]) => a.localeCompare(b))

    if (parkingArray.length > 0) {
        for (const carNumber of parkingArray) {
            console.log(`${carNumber[0]}`)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])