function solve(input){
    let num = input;
    let string = "";
  if(input == undefined){
      num = 5;
  }
  
for (let i=1; i <= num; i++){
    for (let j=1; j <= num; j++){
    string += '*';
    }
    string +="\n";
}
console.log(string);
}

solve(1);
solve(3);
solve();