const mathEnforcer = require('../04. Math Enforcer');
const assert = require('chai').assert;

describe('Test mathEnforcer functionality', () => {
    it('Should fail when non number is provided', () => {
        let expectedResult = undefined;
        
        assert.equal(mathEnforcer.addFive('test'), expectedResult);
        assert.equal(mathEnforcer.subtractTen('test'), expectedResult);
        assert.equal(mathEnforcer.sum('test1', 'test2'), expectedResult);
        assert.equal(mathEnforcer.sum(1, 'test2'), expectedResult);
        assert.equal(mathEnforcer.sum('test1', 2), expectedResult);
    });

    it('Should fail when NaN is provided', () => {
        
        assert.isNaN(mathEnforcer.addFive(NaN));
        assert.isNaN(mathEnforcer.subtractTen(NaN));
        assert.isNaN(mathEnforcer.sum(NaN, 'test2'));
       assert.isNaN(mathEnforcer.sum('test1', NaN));
    });

    it('Should pass when positive number is provided', () => {
        
        assert.equal(mathEnforcer.addFive(1), 6);
        assert.equal(mathEnforcer.subtractTen(1), -9);
        assert.equal(mathEnforcer.sum(1, 2), 3);
    });

    it('Should pass when negative number is provided', () => {
        assert.equal(mathEnforcer.addFive(-1), 4);
        assert.equal(mathEnforcer.subtractTen(-1), -11);
        assert.equal(mathEnforcer.sum(-1, -2), -3);
    });

    it('Should pass when positive decimal number is provided', () => {
        assert.closeTo(mathEnforcer.addFive(0.5), 5.5, 0.01);
        assert.closeTo(mathEnforcer.subtractTen(0.5), -9.5, 0.01);
        assert.closeTo(mathEnforcer.sum(-1, 0.5), -0.5, 0.01);
        });

    it('Should pass when negative decimal number is provided', () => {
        assert.closeTo(mathEnforcer.addFive(-0.5), 4.5, 0.01);
        assert.closeTo(mathEnforcer.subtractTen(-0.5), -10.5, 0.01);
        assert.closeTo(mathEnforcer.sum(1, -0.5), 0.5, 0.01);
    });
    
    it('Should pass when zero number is provided', () => {
        assert.equal(mathEnforcer.addFive(0), 5);
        assert.equal(mathEnforcer.subtractTen(0), -10);
        assert.equal(mathEnforcer.sum(0, 0), 0);    
        assert.equal(mathEnforcer.sum(0, 1), 1);    
        assert.equal(mathEnforcer.sum(1, 0), 1);
        assert.equal(mathEnforcer.sum(-1, 0), -1);
    });

    it('Should pass when equal value number is provided', () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
        assert.equal(mathEnforcer.subtractTen(10), 0);
        assert.equal(mathEnforcer.sum(5, -5), 0);    
        assert.equal(mathEnforcer.sum(-3, 2), 1); 
    });
});