function solve(arr){
    let result = [];
    let length = arr.length;
    arr.sort((a,b) => a-b);
    for(let i = 0; i< Math.floor(length/2); i++){
        result.push(arr.shift());
        result.push(arr.pop());
    }
    if(length %2 != 0){
        result.push(arr.pop())
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, -8]));