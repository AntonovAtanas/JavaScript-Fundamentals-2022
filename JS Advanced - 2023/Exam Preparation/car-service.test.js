let { carService } = require('./car-service');
let { expect } = require('chai');

describe("Check if the object carService has the methods working properly", () => {
    describe("The isItExpensive method works correctly", () => {

        it('Returns the issue is more severe', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('Returns the price is cheaper', () => {
            expect(carService.isItExpensive('Tyres')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('Radiator')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('Electronics')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe("The discount method works correctly", () => {

        it('Throws error for invalid input', () => {
            expect(() => carService.discount('23', 23)).to.throw(Error, 'Invalid input');
            expect(() => carService.discount([23], 23)).to.throw(Error, 'Invalid input');
            expect(() => carService.discount({}, 23)).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(undefined, 23)).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(15, '7')).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(8, [2])).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(5, {})).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(9, undefined)).to.throw(Error, 'Invalid input');
        });

        it('Returns that a discount can not be applied', () => {
            expect(carService.discount(1, 200)).to.equal('You cannot apply a discount');
            expect(carService.discount(2, 50)).to.equal('You cannot apply a discount');
        });

        it('Returns the discount which has been applied', () => {
            expect(carService.discount(7, 40)).to.equal(`Discount applied! You saved 6$`);
            expect(carService.discount(3, 20)).to.equal(`Discount applied! You saved 3$`);
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
            expect(carService.discount(15, 200)).to.equal(`Discount applied! You saved 60$`);
        });
    });

    describe("The partsToBuy method works correctly", () => {

        it('Throws error for invalid input', () => {
            expect(() => carService.partsToBuy('23', [23])).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy({}, [23])).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(6, [23])).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy(undefined, [23])).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy([{}], 23)).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy([{}], '23')).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy([{}], {})).to.throw(Error, 'Invalid input');
            expect(() => carService.partsToBuy([{}], undefined)).to.throw(Error, 'Invalid input');
        });

        it('Returns parts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ['injector'])).to.equal(0);
            expect(carService.partsToBuy([], ['injector'])).to.equal(0);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ['coil springs'])).to.equal(230);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, { part: 'injector', price: 100 }], ['coil springs', 'injector'])).to.equal(330);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ['coil springs', 'blowoff valve'])).to.equal(375);
        });

    });
});
