let Person = require('./01. Person');

function arrOfPesons(){
    let result = [];

    result.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    result.push(new Person('SoftUni', '', '', ''));
    result.push(new Person('Stephen', 'Johnson', 25, ''));
    result.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return result.join('\n');
}

console.log(arrOfPesons());