function solve(matrix){
    const result = [];
    for(let i = 0; i<matrix.length; i++){
        matrix[i].sort((a,b) => b-a);
        result.push(matrix[i][0]);
    }
    return result.sort((a,b) => b-a)[0];
}

console.log(solve([[20, 50, 10],[8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]));