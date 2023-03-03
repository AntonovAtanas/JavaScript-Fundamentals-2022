let isSymmetric = require('./05 - symmetric');
let { expect } = require('chai')

describe('Check if arrays are symmetric', () => {

    it('Checks if the function receives an array - passed number', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('Checks if the function receives an array - passed string', () => {
        expect(isSymmetric('3')).to.be.false;
    });

    it('Checks if arrays are equal with even length array with numbers', () => {
        let firstArr = [1, 2, 2, 1];
        expect(isSymmetric(firstArr)).to.be.true;
    });

    it('Checks if arrays are equal with even length array with strings', () => {
        let firstArr = ['a', 'b', 'b', 'a'];
        expect(isSymmetric(firstArr)).to.be.true;
    });

    it('Checks if arrays are equal with odd length array with strings', () => {
        let firstArr = ['a', 'b', 'a'];
        expect(isSymmetric(firstArr)).to.be.true;
    });

    it('Checks if arrays are equal with odd length array with numbers', () => {
        let firstArr = [1, 2, 1];
        expect(isSymmetric(firstArr)).to.be.true;
    });

    it('Checks if arrays are equal with odd length array with numbers', () => {
        let firstArr = [1, 2, 2];
        expect(isSymmetric(firstArr)).to.be.false;
    });

    it('Checks if arrays are equal with even length array with numbers', () => {
        let firstArr = [1, 2, 1, 2];
        expect(isSymmetric(firstArr)).to.be.false;
    });

    it('Check for mismatch elements', () => {
        let firstArr = [1, 2, '1'];
        expect(isSymmetric(firstArr)).to.be.false;
    });

})