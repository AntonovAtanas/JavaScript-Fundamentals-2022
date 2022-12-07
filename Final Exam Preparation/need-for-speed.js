function needForSpeed(input) {

    let ownedCars = Number(input.shift());
    let carsGarage = {};

    for (let i = 0; i < ownedCars; i++) {
        let currentCarInfo = input.shift();
        let [car, mileage, fuel] = currentCarInfo.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carsGarage[car] = { mileage, fuel }
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [currentCommand, car] = command.split(' : ')

        switch (currentCommand) {
            case 'Drive':
                let distanceTraveled = Number(command.split(' : ')[2]);
                let usedFuel = Number(command.split(' : ')[3]);

                if (carsGarage[car].fuel < usedFuel) {
                    console.log('Not enough fuel to make that ride')
                } else {
                    carsGarage[car].fuel -= usedFuel;
                    carsGarage[car].mileage += distanceTraveled;
                    console.log(`${car} driven for ${distanceTraveled} kilometers. ${usedFuel} liters of fuel consumed.`)
                }
                if (carsGarage[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`)
                    delete carsGarage[car];
                }
                break;

            case 'Refuel':
                let refuel = Number(command.split(' : ')[2]);
                if (carsGarage[car].fuel + refuel > 75) {
                    console.log(`${car} refueled with ${75 - carsGarage[car].fuel} liters`)
                    carsGarage[car].fuel = 75;
                } else {
                    carsGarage[car].fuel += refuel;
                    console.log(`${car} refueled with ${refuel} liters`)
                }
                break;
            
            case 'Revert':
                let kilometers = Number(command.split(' : ')[2]);

                if (carsGarage[car].mileage - kilometers <= 10000){
                    carsGarage[car].mileage = 10000
                } else {
                    carsGarage[car].mileage -= kilometers;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`)
                }
                break;
        }
        command = input.shift();
    }

    for (const key in carsGarage) {
        console.log(`${key} -> Mileage: ${carsGarage[key].mileage} kms, Fuel in the tank: ${carsGarage[key].fuel} lt.`)
    }
}

needForSpeed(
    // [
    //     '3',
    //     'Audi A6|38000|62',
    //     'Mercedes CLS|11000|35',
    //     'Volkswagen Passat CC|45678|5',
    //     'Drive : Audi A6 : 543 : 47',
    //     'Drive : Mercedes CLS : 94 : 11',
    //     'Drive : Volkswagen Passat CC : 69 : 8',
    //     'Refuel : Audi A6 : 50',
    //     'Revert : Mercedes CLS : 500',
    //     'Revert : Audi A6 : 30000',
    //     'Stop'
    // ]

    [
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
    ]

)