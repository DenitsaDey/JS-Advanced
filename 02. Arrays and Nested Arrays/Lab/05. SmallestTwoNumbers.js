function solve(arr){
    arr.sort((a,b) => a-b);
    let result = arr[0] + ' ' + arr[1];
    return result;
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));