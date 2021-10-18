let cinema = require('../cinema');
let assert = require('chai').assert;

describe("Tests cinema functionality", function() {
    describe("showMovies function", function() {
        it("should return message when empty array", function() {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        });
        it("should return string separated by comma when movies array provided", function() {
            assert.equal(cinema.showMovies(['a', 'b', 'c']), ['a', 'b', 'c'].join(', '));
            assert.equal(cinema.showMovies(['a', 'b', 'c']), 'a, b, c');
        });
     });
     describe("ticketPrice function", function() {
        it("return correct price of projection type", function() {
            assert.equal(cinema.ticketPrice("Premiere"), 12.00);
            assert.equal(cinema.ticketPrice("Normal"), 7.50);
            assert.equal(cinema.ticketPrice("Discount"), 5.50);          
        });
        it("should fail when incorrect projection type provided", function() {
            assert.throws(() => cinema.ticketPrice("Gold"), 'Invalid projection type.');       
        });
     });
     describe("swapSeatsInHall function", function() {
        it("should return success message when correct params provided", function() {
            assert.equal(cinema.swapSeatsInHall(3, 5), 'Successful change of seats in the hall.');
        });
        it("should return not-success message when incorrect params provided", function() {
            assert.equal(cinema.swapSeatsInHall(5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('str1', 'str2'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(3, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(3, 3), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-3, -5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(23, 25), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(2.3, 7.5), 'Unsuccessful change of seats in the hall.');
        });
     });
});
