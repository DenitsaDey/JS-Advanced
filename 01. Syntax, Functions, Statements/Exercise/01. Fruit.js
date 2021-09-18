function buy(fruit, amount, price){
    let amountInKg = amount/1000;
    let total = amountInKg * price;

    console.log(`I need $${total.toFixed(2)} to buy ${amountInKg.toFixed(2)} kilograms ${fruit}.`);
}

buy('orange', 2500, 1.80);
buy('apple', 1563, 2.35);