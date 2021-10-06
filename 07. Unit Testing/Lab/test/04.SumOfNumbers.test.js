const assert = require('chai').assert;
const sum = require('../04.SumOfNumbers');

describe('Test sum functionality', () =>{
    it('Should add positive numbers', () => {
        //Arrange
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;
    
        //Act
        let actualResult = sum(input);
        
        //Assert mocha
        // if(expectedResult === actualResult) {
        //     console.log('Passing');
        // } else{
        //     throw new Error('Sum should be 15');
        // }
    
        //Assert chai
        assert.strictEqual(expectedResult, actualResult);
    });

    it('Should return false when adding positive numbers', () => {
        //Arrange
        let input = [1, 2, 3, 4, 6];
        let expectedResult = 15;
    
        //Act
        let actualResult = sum(input);
            
        //Assert chai
        assert.notEqual(expectedResult, actualResult);
    });

    it('Should add negative numbers', () => {
        //Arrange
        let input = [-1, -2, -3];
        let expectedResult = -6;
    
        //Act
        let actualResult = sum(input);
        
        //Assert chai
        assert.strictEqual(expectedResult, actualResult);
    });
})
