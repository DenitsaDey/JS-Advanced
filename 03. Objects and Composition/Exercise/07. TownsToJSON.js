function solve(input){
    let [columns,...table] = input.map(splitLine);

    function isEmptyString(x){
        return x !== "";
    }

    function convertIfNum(x){
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input){
        return input.split('|').filter(isEmptyString).map(x=> x.trim()).map(convertIfNum);
    }
    

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {});
    }));
}



// function solve(arr){
//     let data = arr
//         .map(row => row.split("|")
//         .filter(x => x != '')
//         .map(x=>x.trim()))
 
//     let properties = data.shift()
   
//     let result = []
 
//     data.forEach(row => {
//         let town = {
//             [properties[0]]: row[0],
//             [properties[1]]: Number(Number(row[1]).toFixed(2)),
//             [properties[2]]: Number(Number(row[2]).toFixed(2)),
//         };
//         result.push(town)
//     });
//     console.log(JSON.stringify(result));
// }


console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
console.log(solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));