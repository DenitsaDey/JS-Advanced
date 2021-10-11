function solve(juicesArr){
    let juices = new Map();
    let bottles = new Map();

    for(let i=0; i<juicesArr.length; i++){
        let [flavor, amount] = juicesArr[i].split(' => ');
        amount = Number(amount);

        if(!juices.has(flavor)){
            juices.set(flavor, 0);
        }

        let totalAmount = juices.get(flavor) + amount;

        if(totalAmount >= 1000){
            if(!bottles.has(flavor)){
                bottles.set(flavor, 0);
            }

            let totalBottles = bottles.get(flavor) + Math.floor(totalAmount / 1000);
            bottles.set(flavor, totalBottles);
            
        }
        
        juices.set(flavor, totalAmount % 1000);
    }

    
    return [...bottles].map(([key, value]) => `${key} => ${value}`).join('\n');
}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
));
console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
));