let library = require('../library');
let assert = require('chai').assert;

describe('Test libraru finctionality', function () {
    describe('calcPriceOfBook function test', function (){
        it('should throw error if nameOfBook is not a string', function(){
            assert.throws(() => library.calcPriceOfBook(5, 2), 'Invalid input');
        });
        it('should throw error if year is not a number', function(){
            assert.throws(() => library.calcPriceOfBook('5', 'year'), 'Invalid input');
        });
        it('should throw error if nameOfBook is not a string and year is not a number', function(){
            assert.throws(() => library.calcPriceOfBook(5, 'year'), 'Invalid input');
        });
        it('should return correct price toFixed(2) if year is after 1980', function(){
            assert.equal(library.calcPriceOfBook('Harry Potter', 1981), `Price of Harry Potter is 20.00`);
        });
        it('should return discounted price toFixed(2) if year is 1980 or before', function(){
            assert.equal(library.calcPriceOfBook('Harry Potter', 1980), `Price of Harry Potter is 10.00`);
            assert.equal(library.calcPriceOfBook('Harry Potter', 1979), `Price of Harry Potter is 10.00`);
        });
    });

    describe('findBook function test', function (){
        it('should throw an error if array of available books is empty', function(){
            assert.throws(() => library.findBook([], 'Harry Potter'), "No books currently available");
        });
        it('should return a success message if array of available books contains the desired book', function(){
            assert.equal(library.findBook(['Harry Potter', 'Mary Popins', 'Pride and Prejudice'], 'Harry Potter'), "We found the book you want.");
        });
        it('should return a correct message if array of available books does not contain the desired book', function(){
            assert.equal(library.findBook(['Mary Popins', 'Pride and Prejudice'], 'Harry Potter'), "The book you are looking for is not here!");
        });
    });

    describe('arrangeTheBooks function test', function (){
        it('should throw an error when countBooks is not a number', function(){
            assert.throws(() => library.arrangeTheBooks('count'), "Invalid input");
        });
        it('should throw an error when countBooks is a negative number', function(){
            assert.throws(() => library.arrangeTheBooks(-1), "Invalid input");
        });
        it('should return a success message if countBooks is less than or equal to available space', function(){
            assert.equal(library.arrangeTheBooks(0), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(25), "Great job, the books are arranged.");
        });
        it('should return correct message if countBooks is more than available space', function(){
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
            assert.equal(library.arrangeTheBooks(100), "Insufficient space, more shelves need to be purchased.");
            });
    });
});