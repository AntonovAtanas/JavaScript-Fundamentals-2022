let { flowerShop } = require('./flowerShop');
let { expect } = require('chai');

describe("Check if the flowershop object works properly", () => {
    describe("Calculates the price correctly", () => {
        it("Returns the result correctly", () => {
            expect(flowerShop.calcPriceOfFlowers('Roses', 4, 23)).to.equal(`You need $92.00 to buy Roses!`);
            expect(flowerShop.calcPriceOfFlowers('Roses', 1, 7)).to.equal(`You need $7.00 to buy Roses!`);
        });

        it("Throws error for invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers(['Roses'], 4, 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers({}, 4, 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(5, 4, 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 4, 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', '4', 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', ['4'], 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', [4], 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', 4.5, 23)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', 3, 23.41)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', 3, [14])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Roses', 3, {})).to.throw(Error, 'Invalid input!');
        });

    });

    describe("Checks the flowers correctly", () => {
        it("Returns the result correctly", () => {
            expect(flowerShop.checkFlowersAvailable('Roses', ['Orchid', 'Roses', 'Magnolia'])).to.equal(`The Roses are available!`);
            expect(flowerShop.checkFlowersAvailable('Orchid', ['Orchid'])).to.equal(`The Orchid are available!`);
        });

        it("Returns that the flowers are not avialable", () => {
            expect(flowerShop.checkFlowersAvailable('Roses', ['Orchid', 'Magnolia', 'Kokiche'])).to.equal(`The Roses are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('Orchid', [])).to.equal(`The Orchid are sold! You need to purchase more!`);
        });
    });

    describe("Sells the flowers correctly", () => {
        it("Returns the result correctly", () => {
            expect(flowerShop.sellFlowers(['Orchid', 'Roses', 'Magnolia'], 2)).to.equal(`Orchid / Roses`);
            expect(flowerShop.sellFlowers(['Orchid', 'Roses', 'Magnolia'], 0)).to.equal(`Roses / Magnolia`);
        });

        it("Returns invalid input", () => {
            expect(() => flowerShop.sellFlowers([], 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers({}, 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(23, 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers('Roses', 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(undefined, 2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(['Orchid', 'Roses', 'Magnolia'], -2)).to.throw(Error, "Invalid input!");
            expect(() => flowerShop.sellFlowers(['Orchid', 'Roses', 'Magnolia'], 7.5)).to.throw(Error, "Invalid input!");
        });
    });

});
