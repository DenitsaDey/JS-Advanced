class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
        
    }

    newCustomer(customer){
        let currCustomer = this.allCustomers.find(x => x.firstName === customer.firstName && x.lastName === customer.lastName && x.personalId === customer.personalId);
        if(currCustomer){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
    }

    depositMoney(personalId, amount){
        let currCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if(!currCustomer){
            throw new Error(`We have no customer with this ID!`);
        }
        currCustomer.totalMoney += amount;
        currCustomer.transactions.unshift(`${currCustomer.firstName} ${currCustomer.lastName} made deposit ${amount}$!`);
        return `${currCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount){
        let currCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if(!currCustomer){
            throw new Error(`We have no customer with this ID!`);
        }
        if(currCustomer.totalMoney < amount){
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`)
        } else{
            currCustomer.totalMoney -= amount;
            currCustomer.transactions.unshift(`${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);
            return `${currCustomer.totalMoney}$`;
        }
    }

    customerInfo(personalId){
        let currCustomer = this.allCustomers.find(x => x.personalId === personalId);
        if(!currCustomer){
            throw new Error(`We have no customer with this ID!`);
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`);
        result.push(`Customer ID: ${currCustomer.personalId}`);
        result.push(`Total Money: ${currCustomer.totalMoney}$`);
        result.push(`Transactions: `);
        let i = currCustomer.transactions.length;
        currCustomer.transactions.forEach(x => {          
            result.push(i + '. ' + x);
            i--;
        });

        return result.join('\n');
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
