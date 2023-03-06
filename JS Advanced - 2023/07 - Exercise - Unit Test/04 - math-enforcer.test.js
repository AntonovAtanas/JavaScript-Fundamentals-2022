let mathEnforcer = require('./04 - math-enforcer');
let { expect } = require('chai');

describe('Check if Math Enforcer has all the functionality working properly', () => {
    // happy cases
    it('Checks if addFive method adds properly 5 and returns the number 10', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10, 'Sums properly with the parameter  5')
    });

    it('Checks if addFive method adds properly 8.2 and returns the number 13.2', () => {
        expect(mathEnforcer.addFive(8.2)).to.equal(13.2, 'Sums properly with the parameter 8.2')
    });

    it('Checks if addFive method adds properly 0 and returns the number 5', () => {
        expect(mathEnforcer.addFive(0)).to.equal(5, 'Sums properly with the parameter 0')
    });

    it('Checks if addFive method adds properly -2 and returns the number 3', () => {
        expect(mathEnforcer.addFive(-2)).to.equal(3, 'Sums properly with the parameter -2')
    });

    it('Checks if subtractTen method subtracts properly 35 and returns the number 25', () => {
        expect(mathEnforcer.subtractTen(35)).to.equal(25, 'Subtracts properly with the parameter 35')
    });

    it('Checks if subtractTen method subtracts properly 25.5 and returns the number 15.5', () => {
        expect(mathEnforcer.subtractTen(25.5)).to.equal(15.5, 'Subtracts properly with the parameter 25.5')
    });

    it('Checks if subtractTen method subtracts properly 0 and returns the number -10', () => {
        expect(mathEnforcer.subtractTen(0)).to.equal(-10, 'Subtracts properly with the parameter 0')
    });

    it('Checks if subtractTen method subtracts properly -12 and returns the number -22', () => {
        expect(mathEnforcer.subtractTen(-12)).to.equal(-22, 'Subtracts properly with the parameter -12')
    });

    it('Checks if sum method sums properly 10 and 12 and returns the number 22', () => {
        expect(mathEnforcer.sum(10, 12)).to.equal(22, 'Sums properly with the parameters 10 and 12')
    });

    it('Checks if sum method sums properly 10 and -12 and returns the number -2', () => {
        expect(mathEnforcer.sum(10, -12)).to.equal(-2, 'Sums properly with the parameters 10 and -12')
    });

    it('Checks if sum method sums properly -35 and 22 and returns the number -13', () => {
        expect(mathEnforcer.sum(-35, 22)).to.equal(-13, 'Sums properly with the parameters -35 and 22')
    });

    it('Checks if sum method sums properly 77 and 7.7 and returns the number 84.7', () => {
        expect(mathEnforcer.sum(77, 7.7)).to.equal(84.7, 'Sums properly with the parameters 77 and 7.7')
    });

    it('Checks if sum method sums properly -22 and -8 and returns the number -30', () => {
        expect(mathEnforcer.sum(-22, -8.5)).to.equal(-30.5, 'Sums properly with the parameters -22 and -8')
    });

    it('Checks if sum method sums properly 10 and -5.5 and returns the number 4.5', () => {
        expect(mathEnforcer.sum(10, -5.5)).to.equal(4.5, 'Sums properly with the parameters 10 and -5.5')
    });

    it('Checks if sum method sums properly 10.2 and 5.5 and returns the number 4.5', () => {
        expect(mathEnforcer.sum(10.2, 5.5)).to.equal(15.7, 'Sums properly with the parameters 10 and -5.5')
    });

    // incorrect cases

    it('Checks if addFive method returns undefined if the parameter is a string', () => {
        expect(mathEnforcer.addFive('five')).to.be.undefined;
    });

    it('Checks if addFive method returns undefined if the parameter is null', () => {
        expect(mathEnforcer.addFive(null)).to.be.undefined;
    });

    it('Checks if addFive method returns undefined if the parameter is an array', () => {
        expect(mathEnforcer.addFive([])).to.be.undefined;
    });

    it('Checks if addFive method returns undefined if the parameter is an object', () => {
        expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it('Checks if addFive method returns undefined if the parameter is undefined', () => {
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it('Checks if subtractTen method returns undefined if the parameter is a string', () => {
        expect(mathEnforcer.subtractTen('five')).to.be.undefined;
    });

    it('Checks if subtractTen method returns undefined if the parameter is null', () => {
        expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    });

    it('Checks if subtractTen method returns undefined if the parameter is an array', () => {
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });

    it('Checks if subtractTen method returns undefined if the parameter is an object', () => {
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it('Checks if subtractTen method returns undefined if the parameter is undefined', () => {
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the first parameter is a string', () => {
        expect(mathEnforcer.sum('five', 2)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the first parameter is an array', () => {
        expect(mathEnforcer.sum([], 35)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the first parameter is an object', () => {
        expect(mathEnforcer.sum({}, 21)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the first parameter is undefined', () => {
        expect(mathEnforcer.sum(undefined, 35)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the second parameter is a string', () => {
        expect(mathEnforcer.sum(2, 'five')).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the second parameter is an array', () => {
        expect(mathEnforcer.sum(21, [])).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the second parameter is an object', () => {
        expect(mathEnforcer.sum(88, {})).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the second parameter is undefined', () => {
        expect(mathEnforcer.sum(98, undefined)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2 parameters are a string', () => {
        expect(mathEnforcer.sum('2', 'five')).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2 parameters are an array', () => {
        expect(mathEnforcer.sum([21], [])).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2 parameters are an object', () => {
        expect(mathEnforcer.sum({ num: 22 }, {})).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2 parameters are undefined', () => {
        expect(mathEnforcer.sum(undefined, undefined)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 1st parameters is null', () => {
        expect(mathEnforcer.sum(null, 12)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2nd parameters is null', () => {
        expect(mathEnforcer.sum(55, null)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if boolean', () => {
        expect(mathEnforcer.sum(true, 55)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2nd is boolean', () => {
        expect(mathEnforcer.sum(21, false)).to.be.undefined;
    });

    it('Checks if sum method returns undefined if the 2nd is boolean', () => {
        expect(mathEnforcer.sum('', 22)).to.be.undefined;
    });
});