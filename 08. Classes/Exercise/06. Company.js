class Company{
    constructor(){
        this.departments = new Map();
    }

    static Employee = class Employee{
        constructor(name, salary, position){
            this.name = name;
            this.salary = salary;
            this.position = position;
        }

        get name(){
            return this._name;
        }
        set name(value){
            this._validateParameter(value);
            this._name = value;
        }

        get salary(){
            return this._salary;
        }
        set salary(value){
            this._validateParameter(value);
            if(value < 0){
                throw new Error("Invalid input!")
            }
            this._salary = value;
        }

        get position(){
            return this._position;
        }
        set position(value){
            this._validateParameter(value);
            this._position = value;
        }

        _validateParameter(value){
            if(value === undefined || value === null || value ===''){
                throw new Error("Invalid input!");
            }
        }

        compareTo(other){
            let result = other.salary - this.salary;
            return result === 0 ? this.name.localeCompare(other.name) : result;
        }

        toString(){
            return `${this.name} ${this.salary} ${this.position}`;
        }
    }
    addEmployee(name, salary, position, department){
        if(department === undefined || department === null || department ===''){
            throw new Error("Invalid input!");
        }
        if(!this.departments.has(department)){
            this.departments.set(department,[]);
        }
        let employees = this.departments.get(department);
        let worker = new Company.Employee(name, salary, position);
        if(!employees.some(w => w.name === worker.name)){      
        employees.push(worker);
        return `New employee is hired. Name: ${name}. Position: ${position}`;   
    }else{
        currentWroker = employees.find(w => w.name === worker.name && w.position === worker.position);
        if(currentWroker.salary < worker.salary){
            currentWroker.salary = worker.salary;
        }
    }
    }

    bestDepartment(){
        let sortedDepartments = [...this.departments]
        .sort(([aName, aEmployees], [bName, bEmployees]) => {
            let bAverageSalary = this._getAverageSalary(bName);
            let aAverageSalary = this._getAverageSalary(aName);
            return bAverageSalary -aAverageSalary;
        });
        
        let [bestDepartmentName, bestDepartmentEmployees] = sortedDepartments[0];
        let sortedEmployees = bestDepartmentEmployees.sort((a, b) => a.compareTo(b));

        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}\n`;
        result += sortedEmployees.map(employee => employee.toString()).join('\n');
        return result;
    }

    _getAverageSalary(department){
        let departmentEmployees = this.departments.get(department);
        return this.departments.get(department)
        .reduce((acc, employee) => acc + employee.salary, 0)/departmentEmployees.length;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
