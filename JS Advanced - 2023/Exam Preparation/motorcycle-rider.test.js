let { motorcycleRider } = require('./motorcycle-rider');
let { expect } = require('chai');

describe('Check if the object motorcycle rider works properly', () => {
    describe('Check if the license is registered', () => {
        it('Throws error for invalid string', () => {
            expect(() => motorcycleRider.licenseRestriction()).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction([])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction({})).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction('PM')).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction('A99')).to.throw("Invalid Information!");
        });

        it('Returns correct if AM is the parameter', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });

        it('Returns correct if A1 is the parameter', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });

        it('Returns correct if A2 is the parameter', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });

        it('Returns correct if A is the parameter', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
    });

    describe('Check if the motorcycleShowroom works', () => {
        it('Throws error for invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom(12, 12)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom('12', 12)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom({}, 12)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 12)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], '12')).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], [])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], {})).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], undefined)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 3)).to.throw("Invalid Information!");
        });

        it('Returns properly result', () => {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 800)).to.equal("There are 3 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 120)).to.equal("There are 0 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 140)).to.equal("There are 1 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250)).to.equal("There are 2 available motorcycles matching your criteria!");
        });

    });

    describe('Check if the otherSpendings works', () => {
        it('Throws error for invalid input', () => {
            expect(() => motorcycleRider.otherSpendings(12, [], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings('12', [], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings({}, [], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(undefined, [], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], 12, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], '33', true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], {}, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], undefined, true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], [])).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], '')).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], {})).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], 12)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], undefined)).to.throw("Invalid Information!");
        });

        it('Returns properly result without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal("You spend $230.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], false)).to.equal("You spend $600.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings([], ['oil filter'], false)).to.equal("You spend $30.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(['helmet'], [], false)).to.equal("You spend $200.00 for equipment and consumables!");
        });

        it('Returns properly result with 10% discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal("You spend $207.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter', 'engine oil'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings([], ['oil filter'], true)).to.equal("You spend $27.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['helmet'], [], true)).to.equal("You spend $180.00 for equipment and consumables with 10% discount!");
        });

    });
})