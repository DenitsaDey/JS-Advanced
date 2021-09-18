function solve(num){
    let sum = 0;
    const string = num.toString();
    let isSame = true;
    for (let i = 0; i<string.length-1; i++){
        if(string[i] !== string[i+1]){
            isSame = false;
        }
        sum += Number(string[i]);
    }
    sum += Number(string[string.length-1]);

    return `${isSame}\n${sum}`;
    
}

console.log(solve(2222222));
console.log(solve(1234));
