const isOddOrEven = require('../02. Odd or Even');
const assert = require('chai').assert;

describe('Test isOddOrEven functionality', () => {
    it('Should fail when non string is provided', () => {
        let input = [1, 2, 3];
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when even string is provided', () => {
        let input = 'ripe';
        let expectedResult = 'even';
        assert.equal(isOddOrEven(input), expectedResult);
    })

    it('Should pass when odd string is provided', () => {
        let input = 'ripen';
        let expectedResult = 'odd';
        assert.equal(isOddOrEven(input), expectedResult);
    })
});