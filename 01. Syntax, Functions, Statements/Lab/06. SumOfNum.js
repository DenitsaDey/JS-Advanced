function solve(n, m){
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for (let i = num1; i <= num2; i++){
        result += i;
    }

    return result;
}

console.log(solve('1', '5'));
console.log(solve('-8', '20'));