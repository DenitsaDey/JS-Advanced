class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    //for problem 02. another version
    arrofPersons(){
        let result = [];

    result.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    result.push(new Person('SoftUni', '', '', ''));
    result.push(new Person('Stephen', 'Johnson', 25, ''));
    result.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return result.join('\n');
}
}

//for problem 02.
module.exports = Person;

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
