let rgbToHexColor = require('./06 - rgb');
let { expect } = require('chai');

describe('RGB Testing input values', () => {

    it('Checks if working properly', () => {
        expect(rgbToHexColor(123, 110, 107)).to.equal('#7B6E6B', 'Returns correct hex code color');
    });

    it('Checks if returns black properly', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000', 'Returns correct hex code color');
    });

    it('Checks if returns pink properly', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA', 'Returns correct hex code color');
    });

    it('Checks if every number is over the range 0-255', () => {
        expect(rgbToHexColor(256, 0, 2)).to.equal(undefined, 'The first parameter is over the range');
        expect(rgbToHexColor(0, 256, 2)).to.equal(undefined, 'The second parameter is over the range');
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined, 'The third parameter is over the range');
    });

    it('Checks if every number is below the range 0-255', () => {
        expect(rgbToHexColor(-1, 0, 2)).to.equal(undefined, 'The first parameter is below the range');
        expect(rgbToHexColor(0, -1, 2)).to.equal(undefined, 'The second parameter is below the range');
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined, 'The third parameter is below the range');
    });

    it('Checks if any input is a lowercase string', () => {
        expect(rgbToHexColor('f', 0, 2)).to.equal(undefined, 'The first parameter is a lowercase string');
        expect(rgbToHexColor(0, 'f', 2)).to.equal(undefined, 'The second parameter is a lowercase string');
        expect(rgbToHexColor(0, 0, 'f')).to.equal(undefined, 'The third parameter is a lowercase string');
    });

    it('Checks if any input is a lowercase string', () => {
        expect(rgbToHexColor('F', 0, 2)).to.equal(undefined, 'The first parameter is an uppercase string');
        expect(rgbToHexColor(0, 'F', 2)).to.equal(undefined, 'The second parameter is a uppercase string');
        expect(rgbToHexColor(0, 0, 'F')).to.equal(undefined, 'The third parameter is a uppercase string');
    });
    
})
