function solve(matrix){
    let sumRow = matrix.map((col => col.reduce((result1,curr1) => result1 + curr1, 0)));
 
    let sumCol = matrix.reduce((result2, result1) => result2.map((curr1, y) => result1[y] + curr1));
 
    let equal = array => array.every( x => x === array[0]);
 
    return equal(sumRow) && equal(sumRow) && sumRow.toString() === sumCol.toString();
}

console.log(solve([[4, 5, 6],[6, 5, 4],[5, 5, 5]]));
console.log(solve([[11, 32, 45],[21, 0, 1],[21, 1, 1]]));
console.log(solve([[1, 0, 0],[0, 0, 1],[0, 1, 0]]));