function towns(arr) {
    let result = {};
    for (const iterator of arr) {
        let tokens = iterator.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);
        if (result[name]) {
            population += result[name];
        }
            result[name] = population;
       
    }
    for (const [name, population] of Object.entries(result)) {
        console.log(`${name} : ${population}`);
    }
}


towns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
towns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);