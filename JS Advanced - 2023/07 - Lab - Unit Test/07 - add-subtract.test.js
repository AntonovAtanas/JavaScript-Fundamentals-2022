let { createCalculator } = require('./07 - add-subtract');
let { expect } = require('chai');

describe('Testing if calculator works as described', () => {
    it('Has correct properties', () => {
        expect(createCalculator()).to.have.property('add');
        expect(createCalculator()).to.have.property('subtract');
        expect(createCalculator()).to.have.property('get');
    });

    it('Method get() returns the value', () => {
        expect(createCalculator().get()).to.equal(0);
    });

    it('Method add() adds number to the value', () => {
        let calc = createCalculator();
        calc.add(2)
        expect(calc.get()).to.equal(2);
    });

    it('Method add() adds number as a string to the value', () => {
        let calc = createCalculator();
        calc.add('2')
        expect(calc.get()).to.equal(2);
    });

    it('Method subtract() subtracts a number to the value', () => {
        let calc = createCalculator();
        calc.subtract(2)
        expect(calc.get()).to.equal(-2);
    });

    it('Method subtract() subtracts a number as a string to the value', () => {
        let calc = createCalculator();
        calc.subtract('2')
        expect(calc.get()).to.equal(-2);
    });

})
