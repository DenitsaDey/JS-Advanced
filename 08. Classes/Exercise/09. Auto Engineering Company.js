function solve(carArrInput){
    let register = new Map(); // map with key(string brand) and value (map with key-value pairs (model - count))

    for(let i = 0; i < carArrInput.length; i++){
        let [brand, model, number] = carArrInput[i].split(" | ");
        number = Number(number);

        if(!register.has(brand)){
            register.set(brand, new Map());
        }
        let currentBrand = register.get(brand); // returs a map with key-value (model - number)
        if(!currentBrand.has(model)){
            currentBrand.set(model, 0);
        }

        let currentModelCount = currentBrand.get(model) + number;
        currentBrand.set(model, currentModelCount);
        
        register.set(brand, currentBrand);
    }

    for(const brand of register.keys()){
        console.log(brand);
        let currentBrandModels = register.get(brand);
        for(const model of currentBrandModels.keys()){
            console.log(`###${model} -> ${currentBrandModels.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);