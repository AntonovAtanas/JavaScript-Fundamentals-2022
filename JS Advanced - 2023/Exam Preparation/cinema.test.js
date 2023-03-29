let { cinema } = require('./cinema');
let { expect } = require('chai');


describe("Check if object works as required", () => {
    describe("Showmovies function works correctly", () => {
        it("Return there are no movies", () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });

        it("Return movies separated by ', '", () => {
            expect(cinema.showMovies(['Lord of the Rings, The Hobbit'])).to.equal('Lord of the Rings, The Hobbit')
        });

        it("Return the single movie", () => {
            expect(cinema.showMovies(['Lord of the Rings'])).to.equal('Lord of the Rings')
        });

        it("Return the single movie", () => {
            expect(cinema.showMovies(['Lord of the Rings', 'The Matrix', 'Star Wars', 'The Mandalorian'])).to.equal('Lord of the Rings, The Matrix, Star Wars, The Mandalorian')
        });
    });

    describe("Ticketprice function works correctly", () => {
        it("Returns the price if the projection is included", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
        });

        it("Returns the price if the projection is included", () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
        });

        it("Returns the price if the projection is included", () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        });

        it("Throw an error if the projection is not included", () => {
            expect(() => cinema.ticketPrice("Other")).to.throw(Error, 'Invalid projection type.');
        });
    });

    describe("swapSeatsInHall function works correctly", () => {
        // fail cases
        it("Returns unsuccessful if no parameter", () => {
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if only 1 num parameter", () => {
            expect(cinema.swapSeatsInHall(2)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if only 1 string parameter", () => {
            expect(cinema.swapSeatsInHall('17')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if 2 string parameters", () => {
            expect(cinema.swapSeatsInHall('17', 'wrong')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if 2 string parameters", () => {
            expect(cinema.swapSeatsInHall('house', 'wrong')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if 2 string parameters", () => {
            expect(cinema.swapSeatsInHall('house', '12')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if 1 num and 1 string parameters", () => {
            expect(cinema.swapSeatsInHall(12, 'wrong')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if 1 num and 1 string parameters", () => {
            expect(cinema.swapSeatsInHall('wrong', '17')).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful non integer", () => {
            expect(cinema.swapSeatsInHall(12.5, 12)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if non integer", () => {
            expect(cinema.swapSeatsInHall(7, 17.7)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if non integer", () => {
            expect(cinema.swapSeatsInHall(7.9, 18)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if larger than 20", () => {
            expect(cinema.swapSeatsInHall(7, 22)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if larger than 20", () => {
            expect(cinema.swapSeatsInHall(57, 13)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if larger than 20", () => {
            expect(cinema.swapSeatsInHall(57, 68)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if lower than 0", () => {
            expect(cinema.swapSeatsInHall(7, -22)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if larger than 20", () => {
            expect(cinema.swapSeatsInHall(-7, 13)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if larger than 20", () => {
            expect(cinema.swapSeatsInHall(-57, -68)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if equal", () => {
            expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if equal", () => {
            expect(cinema.swapSeatsInHall(0, 15)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if equal", () => {
            expect(cinema.swapSeatsInHall(15, 0)).to.equal('Unsuccessful change of seats in the hall.')
        });

        it("Returns unsuccessful if equal", () => {
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.')
        });

        // happy cases

        it("Returns successfull", () => {
            expect(cinema.swapSeatsInHall(12, 16)).to.equal('Successful change of seats in the hall.')
        });

        it("Returns successfull", () => {
            expect(cinema.swapSeatsInHall(20, 16)).to.equal('Successful change of seats in the hall.')
        });

        it("Returns successfull", () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.')
        });
    });
    
});
