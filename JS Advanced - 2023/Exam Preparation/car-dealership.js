class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
    };

    sellCar(model, desiredMileage) {
        let foundCar = this.availableCars.find(element => element.model === model);
        let index = this.availableCars.indexOf(foundCar);

        if (foundCar === undefined) {
            throw new Error(`${model} was not found!`)
        } else {
            if (foundCar.mileage <= desiredMileage) {
                foundCar.price = foundCar.price;
            }
            else if (foundCar.mileage - desiredMileage <= 40000) {
                foundCar.price = foundCar.price - (foundCar.price * 0.05);
            } else {
                foundCar.price = foundCar.price - (foundCar.price * 0.1);
            }
            this.availableCars.splice(index, 1);
            delete foundCar.mileage;
            this.soldCars.push(foundCar);
            this.totalIncome += foundCar.price;
            return `${model} was sold for ${foundCar.price.toFixed(2)}$`
        }
    };

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        } else {
            let res = [];
            res.push('-Available cars:');
            for (const currentCar of this.availableCars) {
                res.push(`---${currentCar.model} - ${currentCar.horsepower} HP - ${currentCar.mileage.toFixed(2)} km - ${currentCar.price.toFixed(2)}$`)
            }
            return res.join('\n')
        }
    };

    salesReport(criteria) {
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }

        let res = [];
        res.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        res.push(`-${this.soldCars.length} cars sold:`);

        for (const currentCar of this.soldCars) {
            res.push(`---${currentCar.model} - ${currentCar.horsepower} HP - ${currentCar.price.toFixed(2)}$`)
        };

        return res.join('\n')
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



