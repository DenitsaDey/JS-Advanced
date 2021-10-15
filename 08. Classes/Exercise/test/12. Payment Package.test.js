const paymentPackage = require('../12. Payment Package');
const assert = require('chai').assert;
const describe = require('mocha').describe;

describe('Test paymentPackage functionality', () => {
    // let instance = undefined;
    // beforeEach(() => {
    //     instance = new paymentPackage('Name', 100);
    // })
    it('should create class using the constructor', () => {
        let instance = new paymentPackage('Name', 100);

        assert.equal(Object(instance).hasOwnProperty('_name'), true);
        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    })

    it('should pass when name is provided', () => {
        let instance = new paymentPackage('Name', 100);

        assert.equal(instance.name, 'Name');

        instance.name = 'Pesho';
        assert.equal(instance.name, 'Pesho');
        assert.throw(() => {instance.name = ''}, 'Name must be a non-empty string');
        assert.throw(() => {instance.name = 2}, 'Name must be a non-empty string');
    })

    it('should pass when value is provided', () => {
        let instance = new paymentPackage('Name', 100); 

        assert.equal(instance.value, 100);

        instance.value = 200;
        assert.equal(instance.value, 200);
        assert.throw(() => {instance.value = -5}, 'Value must be a non-negative number');
        assert.throw(() => {instance.value = '2'}, 'Value must be a non-negative number');
        assert.doesNotThrow(() => {instance.value = 0});
    })

    it('should pass when VAT is provided', () => {
        let instance = new paymentPackage('Name', 100); 

        assert.equal(instance.VAT, 20);

        instance.VAT = 40;
        assert.equal(instance.VAT, 40);
        assert.throw(() => {instance.VAT = 'vat'}, 'VAT must be a non-negative number');
        assert.throw(() => {instance.VAT = -2}, 'VAT must be a non-negative number');
        assert.throw(() => {instance.VAT = '2'}, 'VAT must be a non-negative number');
        assert.throw(() => {instance.VAT = undefined}, 'VAT must be a non-negative number');
        assert.doesNotThrow(() => {instance.VAT = 0});
    })

    it('should pass when active', () => {
        let instance = new paymentPackage('Name', 100);

        assert.equal(instance.active, true);

        instance.active = false;
        assert.isFalse(instance.active);
        assert.throw(() => {instance.active = 'active'}, 'Active status must be a boolean');
        assert.throw(() => {instance.active = undefined}, 'Active status must be a boolean');
    })

    it('should pass when toString() is used', () => {
        function getString(name, value, VAT = 20, active = true){
        return [`Package: ${name}` + (active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`].join('\n');
    }
        let instance = new paymentPackage('Name', 100);
        
        assert.equal(instance.toString(), getString('Name', 100));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString('Gosho', 100));
        instance.value = 200;
        assert.equal(instance.toString(), getString('Gosho', 200));
        instance.VAT = 40;
        assert.equal(instance.toString(), getString('Gosho', 200, 40));
        instance.active = false;
        assert.equal(instance.toString(), getString('Gosho', 200, 40, false));
    })
})