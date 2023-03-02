let {sum} = require('./04 - sum');
let {expect} = require('chai');

describe('Function test', () => {
    it ('Works with numbers 5,5', () =>{
        expect(sum([5, 5])).to.equal(10, 'The sum is correct')
    });

    it ('Receives an array of numbers', () =>{
        let arr = ['a', 5];
        expect(typeof sum(arr)).to.equal('number', 'Returns a number');
    });

    it ('Sums all elements ', () =>{
        let arr = [2, 5, 6, 7];
        expect(sum(arr)/arr.length).to.equal(5, 'Returns a number');
    });

    it ('Checks if the argument is an array', () =>{
        let arr = [2, 5, 6, 7];
        expect(arr).to.be.an('array', 'The argument is an array')
    });
});