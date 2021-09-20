function solve(n, k) {
    let result = [n];
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += result[j];
        }
        result.push(sum);
    }
    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));