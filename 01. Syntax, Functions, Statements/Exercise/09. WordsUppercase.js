function solve(input){
    let result = '';
    //let string = input.split(/[',', ' ', '!', '.', '?', ':', ';']+/);
    let pattern = /[\w]+/g;
    let string = input.match(pattern);
    result = string.join(', ').toUpperCase();
    
    return result.trimEnd();
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));