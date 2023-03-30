let { expect } = require('chai');
let { library } = require('./library');

describe("Check if library works properly", function () {

    describe("Calculates the price of the book", () => {

        it("if first parameter is not a string throw error", () => {
            expect(() => library.calcPriceOfBook(23, 1944)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({}, 1944)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([], 1944)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1944)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(null, 1944)).to.throw(Error, 'Invalid input');
        });

        it("if second parameter is not an integer throw error", () => {
            expect(() => library.calcPriceOfBook('Titanic', 19.44)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Titanic', 'price')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Titanic', {})).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Titanic', [23])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Titanic', undefined)).to.throw(Error, 'Invalid input');
        });

        it("Returns the price properly", () => {
            expect(library.calcPriceOfBook('Titanic', 1999)).to.equal(`Price of Titanic is 20.00`)
            expect(library.calcPriceOfBook('Titanic', 1929)).to.equal(`Price of Titanic is 10.00`)
            expect(library.calcPriceOfBook('LOTR', 1980)).to.equal(`Price of LOTR is 10.00`)
        });

    });

    describe("Finds the book", () => {

        it("Finds the book", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", "Titanic"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy"], 'Troy')).to.equal('We found the book you want.');
        });

        it("Throws error if the array is empty", () => {
            expect(() => library.findBook([], 'Titanic')).to.throw(Error, 'No books currently available');
        });

        it("Return if the book is not there", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", "Titanic"], 'Musk biography')).to.equal('The book you are looking for is not here!');
        });
    });

    describe("Arranges the books", () => {

        it("Throws error if the book is not an integer", () => {
            expect(() => library.arrangeTheBooks(23.5)).to.throw(Error, 'Invalid input');
        });

        it("Throws error if the book is not an integer", () => {
            expect(() => library.arrangeTheBooks('23.5')).to.throw(Error, 'Invalid input');
        });

        it("Throws error if the book is not an integer", () => {
            expect(() => library.arrangeTheBooks('25')).to.throw(Error, 'Invalid input');
        });

        it("Throws error if the book is lower than 0", () => {
            expect(() => library.arrangeTheBooks(-2)).to.throw(Error, 'Invalid input');
        });
        
        it("Throws error if the book is lower than 0", () => {
            expect(() => library.arrangeTheBooks(-15)).to.throw(Error, 'Invalid input');
        });

        it("Throws error if the book is invalid", () => {
            expect(() => library.arrangeTheBooks([-15])).to.throw(Error, 'Invalid input');
        });

        it("Throws error if the book is invalid", () => {
            expect(() => library.arrangeTheBooks({'dada': 23})).to.throw(Error, 'Invalid input');
        });

        it("Return error if the book is invalid", () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it("Return error if the book is invalid", () => {
            expect(library.arrangeTheBooks(85)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it("Return error if the book is invalid", () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it("Return error if the book is invalid", () => {
            expect(library.arrangeTheBooks(25)).to.equal('Great job, the books are arranged.');
        });

    });
});