function solve(num1, num2){
    let gcd = 1;
    for( let i = 1; i <= num2; i++){

   
    if(num1 % i == 0 && num2 % i == 0){
        gcd = i
    }
}
    return gcd;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));