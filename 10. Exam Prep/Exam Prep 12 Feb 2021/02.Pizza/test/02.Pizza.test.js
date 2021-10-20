const pizzUni = require('../02.Pizza');
const assert = require('chai').assert;

describe("Tests pizzUni functionality", function() {
    describe("makeAnOrder function test", function() {

        it("should throw error if obj has no pizza ordered", function() {
            let obj = {};
            let obj2 = {orderedDrink: 'juice'}
            assert.throws(() => pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.');
            assert.throws(() => pizzUni.makeAnOrder(obj2), 'You must order at least 1 Pizza to finish the order.');
        });
        it('should return confirmation message when pizza is ordered', () =>{
            let obj = {orderedPizza: 'Margherita'}
            assert.equal(pizzUni.makeAnOrder(obj), `You just ordered ${obj.orderedPizza}`);
        });
        it('should return confirmation message when pizza and drink is ordered', () =>{
            let obj = {orderedPizza: 'Margherita', orderedDrink: 'juice'}
            assert.equal(pizzUni.makeAnOrder(obj), `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`);
        });
     });

     describe("getRemainingWork function test", function() {

        it("should return remaining pizza names", function() {
            let statusArr = [{pizzaName: 'Margherita', status: 'ready'},
                            {pizzaName: 'Hawaii', status: 'complete'},
                            {pizzaName: 'Tuna', status: 'in process'}]
            assert.equal(pizzUni.getRemainingWork(statusArr), 'The following pizzas are still preparing: Hawaii, Tuna.');
        });
        it("should return correct message when all pizzas ready", function() {
            let statusArr = [{pizzaName: 'Margherita', status: 'ready'}]
            assert.equal(pizzUni.getRemainingWork(statusArr), 'All orders are complete!')
        });
     });

     describe("orderType function test", function() {

        it("should give discount when type of order is Carry Out", function() {
            let totalSum = 10;
            let floatingSum = 9.5;
            assert.equal(pizzUni.orderType(totalSum, 'Carry Out'), 9);
            assert.equal(pizzUni.orderType(floatingSum, 'Carry Out'), (9.5*0.9));
        });
        it("should return TotalSum when type of order is Delivery", function() {
            let totalSum = 10;
            let floatingSum = 9.5;
            assert.equal(pizzUni.orderType(totalSum, 'Delivery'), 10);
            assert.equal(pizzUni.orderType(floatingSum, 'Delivery'), 9.5);
        });
     });
});
