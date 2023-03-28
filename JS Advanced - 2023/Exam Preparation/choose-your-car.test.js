let {chooseYourCar} = require('./choose-your-car');
let {expect} = require('chai');

describe('check if the object chooseYourCar works properly', () => {
    describe ('If the method choosingType works', () => {
        it('Throws error for invalid year', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1898)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw('Invalid Year!');
        });

        it('Throws error for invalid type', () => {
            expect(() => chooseYourCar.choosingType('Coupet', 'red', 1999)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType('Racing', 'yellow', 2004)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType('Hedgeback', 'blue', 1955)).to.throw("This type of car is not what you are looking for.");
        });

        it('Return the car meets the requirements', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal("This red Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType('Sedan', 'yellow', 2014)).to.equal("This yellow Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.equal("This blue Sedan meets the requirements, that you have.");
        });

        it('Return the car is too old with this requirements', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 1900)).to.equal("This Sedan is too old for you, especially with that red color.");
            expect(chooseYourCar.choosingType('Sedan', 'yellow', 2009)).to.equal("This Sedan is too old for you, especially with that yellow color.");
            expect(chooseYourCar.choosingType('Sedan', 'blue', 1999)).to.equal("This Sedan is too old for you, especially with that blue color.");
        });
    });

    describe ('If the method brandName works', () => {
        it('Throws error for invalid year', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Ford"], 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Ford"], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName("BMW", 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName({}, 2)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(undefined, 2)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(5, 2)).to.throw('Invalid Information!');
        });

        it('Returns the array joined by comma', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Ford"], 1)).to.equal('BMW, Peugeot, Ford');
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Ford"], 0)).to.equal('Toyota, Peugeot, Ford');
        });
    });

    describe ('If the method brandName works', () => {
        it('Throws error for invalid year', () => {
            expect(() => chooseYourCar.carFuelConsumption([], 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('23', 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption({}, 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(undefined, 4)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(3, '4')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(120, [])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(77, {})).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(25, undefined)).to.throw('Invalid Information!');
        });

        it('Returns result properly', () => {
            expect(chooseYourCar.carFuelConsumption(120, 11)).to.equal("The car burns too much fuel - 9.17 liters!");
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal("The car burns too much fuel - 8.00 liters!");
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(250, 7)).to.equal("The car is efficient enough, it burns 2.80 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(179, 7)).to.equal("The car is efficient enough, it burns 3.91 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        });
    });
})