function solve(order){
    function getEngine(power){
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ].sort((a,b) => a.power - b.power);

        return engines.find(el=> el.power >= power);
    }
    function getCarriage(carriage, color){
        return{type: carriage,
        color}
    }
    function getWheels(wheelsize){
        let wheel = wheelsize % 2 === 0 ? Math.floor(wheelsize) - 1 : Math.floor(wheelsize);
        return [wheel, wheel , wheel, wheel];
        // return Array[4].fill[wheel, 0, 4];
    }
    let car = {};
    car.model = order.model;
    car.engine = getEngine(order.power);
    car.carriage = getCarriage(order.carriage, order.color);
    car.wheels = getWheels(order.wheelsize);
    return car;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));