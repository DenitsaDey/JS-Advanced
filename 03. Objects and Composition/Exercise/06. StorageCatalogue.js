function solve(input){
    let result = {};
    while(input.length){
        let [name, price] = input.shift().split(' : ');
        const firstLetter = name[0];

        if(!result[firstLetter]){
            result[firstLetter] = [];
        }

        result[firstLetter].push({name, price: Number(price)});
    }
    let dictionary = [];
    Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(entry =>{
        let values = entry[1]
        .sort((a,b) => (a.name).localeCompare(b.name))
        .map(product=>`  ${product.name}: ${product.price}`)
        .join(`\n`);

        let string = `${entry[0]}\n${values}`;
        dictionary.push(string)
})
    
    return dictionary.join(`\n`);
}

console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));

console.log(solve(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
));