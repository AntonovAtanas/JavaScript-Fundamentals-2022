function garageRegister(input) {

    let garage = {};

    for (const line of input) {
        let [garageNumber, carInfo] = line.split(' - ');
        let carInfoArray = carInfo.split(', ');
        let currentCarInfoObject = {}
        for (const currentInfo of carInfoArray) {
            let [key, value] = currentInfo.split(': ')

            if (!garage.hasOwnProperty(garageNumber)) {
                garage[garageNumber] = [];
            }
            currentCarInfoObject[key] = value;
        }
        garage[garageNumber].push(currentCarInfoObject)
    }

    for (const key in garage) {
        console.log(`Garage № ${key}`)

        for (const currentCar of garage[key]) {
            let currentCarArr = Object.entries(currentCar);
            let finalArray = []
            currentCarArr.forEach(element => {
                let info = `${element[0]} - ${element[1]}`;
                finalArray.push(info)
            });
            console.log(`--- ${finalArray.join(', ')}`)
        }
    }
}

garageRegister(['1 - color: green, fuel type: petrol',

    '1 - color: dark red, manufacture: WV',

    '2 - fuel type: diesel',

    '3 - color: dark blue, fuel type: petrol'])