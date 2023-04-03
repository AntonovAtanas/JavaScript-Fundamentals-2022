let { testNumbers } = require('./test-numbers');
let { expect } = require('chai');

describe('Check if the testNumbers object works properly', () => {
    describe('Check if sum numbers method is correctly running', () => {
        it('Returns undefined if the parameters are not numbers', () => {
            expect(testNumbers.sumNumbers('12', 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers([3], 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(4, '3')).to.equal(undefined);
            expect(testNumbers.sumNumbers(5, [3])).to.equal(undefined);
            expect(testNumbers.sumNumbers(7, {})).to.equal(undefined);
            expect(testNumbers.sumNumbers(5, undefined)).to.equal(undefined);
        });

        it('Returns the sum properly', () => {
            expect(testNumbers.sumNumbers(3, 3)).to.equal('6.00');
            expect(testNumbers.sumNumbers(3, 0)).to.equal('3.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(7.14, 3)).to.equal('10.14');
            expect(testNumbers.sumNumbers(1, -3)).to.equal('-2.00');
            expect(testNumbers.sumNumbers(-8, -3)).to.equal('-11.00');
            expect(testNumbers.sumNumbers(-5, -3.6)).to.equal('-8.60');
            expect(testNumbers.sumNumbers(14, 8.5)).to.equal('22.50');
        });
    });

    describe('Check if the numberChecker method is correctly running', () => {
        it('Throws Error if the parameter is not a number', () => {
            expect(() => testNumbers.numberChecker('Num')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker({})).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker([23, 14])).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');
        });

        it('Returns the number is even', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(18)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-4)).to.equal('The number is even!');
        });

        it('Returns the number is odd', () => {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(17)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-7)).to.equal('The number is odd!');
        });
    });

    describe('Check if the averageSumArray method is correctly running', () => {
        it('Returns the average sum', () => {
            expect(testNumbers.averageSumArray([2, 4, 6])).to.equal(4);
            expect(testNumbers.averageSumArray([2])).to.equal(2);
            expect(testNumbers.averageSumArray([2, 7])).to.equal(4.5);
        });

    });
})