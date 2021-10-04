function solve(...args){
    let occurances = {};
    let result = [];
    for(let i=0; i<args.length; i++){
       let type= typeof(args[i]);
       result.push(`${type}: ${args[i]}`);
        occurances[type] = occurances[type] !== undefined 
        ? occurances[type]+1 
        : 1;
      
    }
    
      Object.keys(occurances)
        .sort((a,b) => occurances[b] - occurances[a])
        .forEach(key => result.push(`${key} = ${occurances[key]}`));
    return result.join('\n');
}

console.log(solve('cat', 5, 42, function () { console.log('Hello world!'); }))