function solve(speed, area) {

    let status = '';
    let areaLimit = 0;

    switch (area) {
        case 'motorway': areaLimit = 130; break;
        case 'interstate': areaLimit = 90; break;
        case 'city': areaLimit = 50; break;
        case 'residential': areaLimit = 20; break;
    }
    if (areaLimit >= speed) {
        return `Driving ${speed} km/h in a ${areaLimit} zone`;
    }
    else {
        const difference = speed - areaLimit;
        if(difference <= 20){
            status = 'speeding';
        }
        else if(difference <= 40){
            status = 'excessive speeding';
        }
        else{
            status = 'reckless driving';
        }
        
        return `The speed is ${difference} km/h faster than the allowed speed of ${areaLimit} - ${status}`;
    }

}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));
