let { rentCar } = require('./rentCar');
let { expect } = require('chai');

describe('Testing if the object rentCar works properly', () => {
    describe('If the search method works', () => {

        it('Throws error if input is not correct', () => {
            expect(() => rentCar.searchCar('Volkswagen', 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar({}, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(235, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(undefined, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], ['BMW'])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 565)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw(Error, 'Invalid input!');
        });

        it('Throw error if the car is not in the array', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Ford')).to.throw(Error, 'There are no such models in the catalog!');
            expect(() => rentCar.searchCar([], 'Ford')).to.throw(Error, 'There are no such models in the catalog!');
        });

        it('Returns the searched car', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
            expect(rentCar.searchCar(["Volkswagen", 'Audi', "BMW", "Audi"], 'Audi')).to.equal(`There is 2 car of model Audi in the catalog!`);
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi", "Audi"], 'Audi')).to.equal(`There is 3 car of model Audi in the catalog!`);
        });
    });

    describe('If the calculate price method works', () => {

        it('Throws error if input is not correct', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 5.5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', ['BMW'])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(['Volkswagen'], 5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(23, 5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 3)).to.throw(Error, 'Invalid input!');
        });

        it('Throws error if there is no such model', () => {
            expect(() => rentCar.calculatePriceOfCar('Ford', 5)).to.throw(Error, 'No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Kia', 5)).to.throw(Error, 'No such model in the catalog!');
        });

        it('Returns the model and the price', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 5)).to.equal(`You choose Mercedes and it will cost $250!`);
            expect(rentCar.calculatePriceOfCar('Mercedes', 1)).to.equal(`You choose Mercedes and it will cost $50!`);
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal(`You choose BMW and it will cost $225!`);
        });

    });

    describe('If the check budget method works', () => {

        it('Throws error if input is not correct', () => {
            expect(() => rentCar.checkBudget('Volkswagen', 23, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(['Volkswagen'], 23, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget({}, 23, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(undefined, 23, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(23, '23', 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(43, [23], 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(8, {}, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(7, undefined, 44)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(23, 55, '44')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(43, 76, [44])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(8, 3, {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(7, 2, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(7.5, 2, 4)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(7, 2.2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(7, 2.9, 8)).to.throw(Error, 'Invalid input!');
        });

        it('Returns the you rent a car', () => {
            expect(rentCar.checkBudget(5, 5, 25)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(1, 5, 15)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(10, 5, 75)).to.equal(`You rent a car!`);
        });

        it('Returns you need bigger budget', () => {
            expect(rentCar.checkBudget(5, 5, 15)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(1, 5, 2)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 5, 44)).to.equal('You need a bigger budget!');
        });

    });
})