let { findNewApartment } = require('./find-appartment');
let { expect } = require('chai')

describe("Check if findNewApartment object works properly", () => {
    describe("Checks if isGoodLocation works correctly", () => {

        it("Throws error for invalid input", () => {
            expect(() => findNewApartment.isGoodLocation(12, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('New York', 22)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('New York', 'Yes')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('New York', [])).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('New York', {})).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('New York', undefined)).to.throw(Error, 'Invalid input!');
        });

        it("Returns the location is not suitable", () => {
            expect(findNewApartment.isGoodLocation('Haskovo', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Pleven', false)).to.equal('This location is not suitable for you.');
        });

        it("Returns there is no public transport", () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        });

        it("Returns there is no public transport", () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        });
    });

    describe("Checks if isLargeEnough works correctly", () => {

        it("Throws error for invalid input", () => {
            expect(() => findNewApartment.isLargeEnough(12, 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough('22', 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough({}, 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough(undefined, 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], 22)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], '25')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], {})).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], undefined)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], true)).to.throw(Error, 'Invalid input!');
        });

        it("Returns the result properly", () => {
            expect(findNewApartment.isLargeEnough([40, 60, 80, 120], 70)).to.equal("80, 120");
            expect(findNewApartment.isLargeEnough([40, 60, 80, 120], 20)).to.equal("40, 60, 80, 120");
            expect(findNewApartment.isLargeEnough([40, 60, 80, 120], 140)).to.equal("");
            expect(findNewApartment.isLargeEnough([40, 60, 80, 120], 60)).to.equal("60, 80, 120");
        });
    });

    describe("Checks if isItAffordable works correctly", () => {

        it("Throws error for invalid input", () => {
            expect(() => findNewApartment.isItAffordable('12', 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable([], 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable({}, 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(undefined, 25)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(25, '25')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(25, [])).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(25, {})).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(25, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(-20, 30)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(50, -30)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(50, 0)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 30)).to.throw(Error, 'Invalid input!');
        });

        it("Returns that you can afford it", () => {
            expect(findNewApartment.isItAffordable(120, 150)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(120, 120)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(70.5, 90)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(40, 153.3)).to.equal("You can afford this home!");
        });

        it("Returns that you can not afford it", () => {
            expect(findNewApartment.isItAffordable(120, 90)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(40, 10)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(111.50, 45)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(190, 90.5)).to.equal("You don't have enough money for this house!");
        });
    });
});