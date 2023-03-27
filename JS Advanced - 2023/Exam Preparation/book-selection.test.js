let { bookSelection } = require('./book-selection');
let { expect } = require('chai');

describe("Check if bookselection object works properly", () => {
    describe("Checks if genreSuitable works correctly", () => {

        it("Returns the books are not suitable for this age", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 7)).to.equal(`Books with Thriller genre are not suitable for kids at 7 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal(`Books with Thriller genre are not suitable for kids at 1 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 3)).to.equal(`Books with Horror genre are not suitable for kids at 3 age`);
            expect(bookSelection.isGenreSuitable('Horror', 2)).to.equal(`Books with Horror genre are not suitable for kids at 2 age`);
        });

        it("Returns the books are suitable for this age", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller', 48)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Thriller', 24)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 55)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 36)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 29)).to.equal(`Those books are suitable`);
        });
    });

    describe("Checks if isItAffordable  works correctly", () => {

        it("Throws error if the input is incorrect", () => {
            expect(() => bookSelection.isItAffordable('Thriller', 12)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable([23], 12)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable({}, 12)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(undefined, 12)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(32, '12')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(22, [12])).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(11, {})).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(8, undefined)).to.throw(Error, 'Invalid input');
        });

        it("Returns bought book", () => {
            expect(bookSelection.isItAffordable(11, 11)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(11, 25)).to.equal(`Book bought. You have 14$ left`);
            expect(bookSelection.isItAffordable(7, 11)).to.equal(`Book bought. You have 4$ left`);
        });

        it("Returns that the budget is not enough to buy a book", () => {
            expect(bookSelection.isItAffordable(11, 10)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(11, 0)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(55, 25)).to.equal(`You don't have enough money`);
        });
    });

    describe("Checks if suitableTitles  works correctly", () => {

        it("Throws error for invalid input", () => {
            expect(() => bookSelection.suitableTitles(11, 'Comedy')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles('11', 'Comedy')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles({}, 'Comedy')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(undefined, 'Comedy')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([], [])).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([], {})).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([], undefined)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([], 23)).to.throw(Error, 'Invalid input');
        });

        it("Adds the title of the book that its genre is equal to", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Sample", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code', 'Sample']);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Sample", genre: "Thriller" }], 'Comedy')).deep.equal([]);

        });
    });
});
