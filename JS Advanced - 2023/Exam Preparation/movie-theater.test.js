let { movieTheater } = require('./movie-theater');
let { expect } = require('chai');

describe('Check if the object movieTheater works as described', () => {
    describe('Check if the method ageRestrictions works', () => {
        it('G returns all ages are admitted to watch', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });

        it('PG returns parental guideness', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it('R returns restricted', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it('NC-17 returns no one under 17', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it('Every other returns no restrictions', () => {
            expect(movieTheater.ageRestrictions('Good')).to.equal(`There are no age restrictions for this movie`);
            expect(movieTheater.ageRestrictions('Not restricted')).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe('Check if the method moneySpent works', () => {
        it('Throws error if the input is not correct', () => {
            expect(() => movieTheater.moneySpent('15', [], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent([], [], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent({}, [], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(undefined, [], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(25, '2', [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(15, 27, [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(22, {}, [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(6, undefined, [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(25, [], 'str')).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(15, [], 23)).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(22, [], {})).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(6, [], undefined)).to.throw(Error, "Invalid input");
        });

        it('Returns the total cost properly without discount', () => {
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 38.50`);
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn', 'Nachos'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 35.50`);
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 40.00`);
        });

        it('Returns the total cost properly with discount', () => {
            expect(movieTheater.moneySpent(4, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 54.80`);
            expect(movieTheater.moneySpent(5, ['Nachos', 'Popcorn', 'Nachos'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 76.40`);
            expect(movieTheater.moneySpent(10, ['Popcorn'], ['Water', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 126.00`);
        });
    });

    describe('Check if the method reservation works', () => {
        it('Throws error if the input is not correct', () => {
            expect(() => movieTheater.reservation([], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation([], '23')).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation([], {})).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation([], undefined)).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation(12, 13)).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation('23', 77)).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation({}, 7)).to.throw(Error, "Invalid input");
            expect(() => movieTheater.reservation(undefined, 5)).to.throw(Error, "Invalid input");
        });

        it('Returns the total cost properly without discount', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 2)).to.equal(1);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 7 }], 2)).to.equal(2);
        });

    });
});