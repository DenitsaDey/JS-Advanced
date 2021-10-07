const lookupChar = require('../03. Char Lookup');
const assert = require('chai').assert;

describe('Test lookupChar functionality', () => {
    it('Should fail when non string is provided', () => {
        
        let expectedResult = undefined;
        let actualResult = lookupChar([1, 2, 3], 2);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non number is provided', () => {
        let expectedResult = undefined;
        let actualResult = lookupChar('testing', 'test');

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non integer number is provided', () => {
        let expectedResult = undefined;
        let actualResult = lookupChar('testing', 2.5);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when index is out of range', () => {
        let expectedResult = 'Incorrect index';
        
        assert.equal(lookupChar('testing', -1), expectedResult);
        assert.equal(lookupChar('testing', 10), expectedResult);
    });

    it('Should pass when string and integer are provided', () => {
      
        let expectedResult = 'e';
        assert.equal(lookupChar('testing', 1), expectedResult);
    })
    
});