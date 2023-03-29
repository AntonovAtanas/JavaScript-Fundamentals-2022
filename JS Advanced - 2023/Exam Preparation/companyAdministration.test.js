let { companyAdministration } = require('./companyAdministration');
let { expect } = require('chai');

describe('Check if companyAdministration works properly', () => {

    describe('If hiring employee works as intended', () => {
        it ('Throws error if the position is not employee', () => {
            expect(() => companyAdministration.hiringEmployee('Ivan', 'Carpenter', 7)).to.throw(Error, 'We are not looking for workers for this position.');
        });

        it ('Returns he is hired', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 7)).to.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3.5)).to.equal(`Ivan was successfully hired for the position Programmer.`);
        });

        it ('Returns not approved', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 0)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2.5)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', -2.5)).to.equal(`Ivan is not approved for this position.`);
        });
    });

    describe('Check if calculates the salary properly', () => {
        it ('Throws error if the position is not employee', () => {
            expect(() => companyAdministration.calculateSalary(-2)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(-5)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary('string')).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary([-2])).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, 'Invalid hours');
        });

        it ('Returns correct salary without bonus', () => {
            expect(companyAdministration.calculateSalary(20)).to.equal(300);
            expect(companyAdministration.calculateSalary(5)).to.equal(75);
            expect(companyAdministration.calculateSalary(76)).to.equal(1140);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it ('Returns correct salary with bonus', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(250)).to.equal(4750);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });

    describe('Check if fired employee runs properly', () => {
        it ('Throws error if the input is invalid', () => {
            // first parameter is invalid
            expect(() => companyAdministration.firedEmployee(25, 3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee('Ivan, Dragan', 3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 3)).to.throw(Error, 'Invalid input');
            //second parameter is invalid
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], '3')).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], [3])).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], {})).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], undefined)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], 4)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], 3)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], 2.5)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], -1)).to.throw(Error, 'Invalid input');
        });

        it ('Removes person from the input', () => {
            expect(companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], 1)).to.equal('Ivan, Gragan');
            expect(companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Gragan'], 0)).to.equal('Georgi, Gragan');
        });
    });

});