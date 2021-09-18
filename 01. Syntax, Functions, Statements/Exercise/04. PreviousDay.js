function solve(year, month, date){
    
    let input = new Date(year, month-1, date);
    input.setDate(date-1);
     return `${input.getFullYear()}-${(input.getMonth()+1)}-${input.getDate()}`;
}

console.log(solve(2016, 9, 30));
console.log(solve(2016, 10, 1));