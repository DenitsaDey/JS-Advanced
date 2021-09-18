function solve(num, a, b, c, d, e) {
    let product = +num;
    const arr = [a, b, c, d, e];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': product /= 2; break;
            case 'dice': product = Math.sqrt(product); break;
            case 'spice': product++; break;
            case 'bake': product *= 3; break;
            case 'fillet': product *= 0.8; break;
        }
        console.log(product);
    }   
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');