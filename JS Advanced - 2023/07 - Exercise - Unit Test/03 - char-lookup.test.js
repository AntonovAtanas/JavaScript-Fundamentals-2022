let lookupChar = require('./03 - char-lookup');
let { expect } = require('chai');

describe('Test if the function retrieves the character properly.', () => {
    // happy cases
    it('Receives the string Softuni and returns properly the 2rd index "f".', () => {
        expect(lookupChar('Softuni', 2)).to.equal('f', 'Properly returns f');
    });

    it('Receives the string Softuni and returns properly the 0 index "S".', () => {
        expect(lookupChar('Softuni', 0)).to.equal('S', 'Properly returns S');
    });

    it('Receives the string Softuni and returns properly the last index', () => {
        let text = 'Softuni';
        let lastChar = text.length - 1
        expect(lookupChar(text, lastChar)).to.equal('i', 'Properly returns i');
    });

    //incorrect cases
    it('Receives first parameter as an array and should return undefined', () => {
        expect(lookupChar(['Softuni'], 2)).to.be.undefined;
    });

    it('Receives second parameter as a string should return undefined', () => {
        expect(lookupChar(['Softuni'], '2')).to.be.undefined;
    });

    it('Receives second parameter as an array and should return undefined', () => {
        expect(lookupChar('Softuni', [2])).to.be.undefined;
    });

    it('Receives first parameter as an object and should return undefined', () => {
        expect(lookupChar({ softuni: 'Softuni' }, 1)).to.be.undefined;
    });

    it('Receives second parameter as float and should return undefined', () => {
        expect(lookupChar('Softuni', 1.23)).to.be.undefined;
    });

    it('Receives first parameter as undefined and should return undefined', () => {
        expect(lookupChar(undefined, 1)).to.be.undefined;
    });

    it('Receives first parameter as null and should return undefined', () => {
        expect(lookupChar(null, 1)).to.be.undefined;
    });

    it('Receives second parameter as an object and should return undefined', () => {
        expect(lookupChar('Softuni', { index: 2 })).to.be.undefined;
    });

    it('Receives a number for first parameter', () => {
        expect(lookupChar(2, 1)).to.be.undefined;
    });

    it('Receives index over of the range', () => {
        expect(lookupChar('Softuni', 9)).to.equal('Incorrect index', 'When index is over the length');
    });

    it('Receives index below the range', () => {
        expect(lookupChar('Softuni', -2)).to.equal('Incorrect index', 'When index is below the length');
    });

    it('Receives empty string', () => {
        expect(lookupChar('', 1)).to.equal('Incorrect index', 'When receives empty string');
    });
})