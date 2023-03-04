let isOddOrEven = require('./02 - even-odd');
let { expect } = require('chai');

describe('Check if length of string is even or odd', () => {
    it('If passed parameter is number', () => {
        expect(isOddOrEven(23)).to.be.undefined;
    });

    it('If passed parameter is an empty array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('If passed parameter is an empty object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('If passed parameter is array with strings', () => {
        expect(isOddOrEven(['bear', 'dog'])).to.be.undefined;
    });

    it('If passed parameter is object with data', () => {
        expect(isOddOrEven({name: 'Peter', age: 29})).to.be.undefined;
    });

    it('If parameter is odd string', () => {
        expect(isOddOrEven('dog')).to.equal('odd');
    });

    it('If parameter is even string', () => {
        expect(isOddOrEven('bear')).to.equal('even');
    });
})