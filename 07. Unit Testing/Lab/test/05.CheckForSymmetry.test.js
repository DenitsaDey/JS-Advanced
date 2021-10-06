const isSymmetric = require('../05.CheckForSymmetry');
const { assert, expect} = require('chai');
require('chai').should();

describe('Test isSymmetric functionality', () => {
    it('should pass when symmetric array', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should fail when non symmetric array', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should fail when non array', () => {
        let expectedResult = false;

        function actualResult(input) {return isSymmetric(input);} 

        assert.equal(actualResult(null), expectedResult);
        assert.equal(actualResult({}), expectedResult);
        assert.equal(actualResult(''), expectedResult);
        assert.equal(actualResult(0), expectedResult);
        assert.equal(actualResult(true), expectedResult);
        assert.equal(actualResult(undefined), expectedResult);
    });

    it('should pass when symmetric string array', () => {
        let input = ['neli', 'johnny', 'neli'];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('should fail when mixed array', () => {
        let input = [1, '1'];
        
        let actualResult = isSymmetric(input);

        expect(actualResult).to.be.false;
    });

    it('should example pass', () =>{
        let actualResult = isSymmetric([1]);

        actualResult.should.be.equal(true)
    })
});