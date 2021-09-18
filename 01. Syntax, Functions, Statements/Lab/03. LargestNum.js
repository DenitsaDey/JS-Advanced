function number(a, b, c){
    let result;
    if(a > b && a > c){
        result = a;
    }
    else if(c > b && c > a) {
        result = c;
    }
    else if(a < b && b > c){
        result = b;
    }
    console.log(`The largest number is ${result}.`);
}

number(5, -3, 16);
number(-3, -5, -22.5);