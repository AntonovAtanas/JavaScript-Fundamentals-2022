class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        let isFound = this.allCustomers.find(element => element.personalId === customer.personalId);

        if (isFound) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer);
        return customer;
    };

    depositMoney(personalId, amount) {
        let isFound = this.allCustomers.find(element => element.personalId === personalId);
        let index = this.allCustomers.indexOf(isFound);

        if (!isFound) {
            throw new Error('We have no customer with this ID!');
        }

        if (!this.allCustomers[index].hasOwnProperty('transactions')) {
            this.allCustomers[index].transactions = [];
        }

        if (!this.allCustomers[index].hasOwnProperty('totalMoney')) {
            this.allCustomers[index]['totalMoney'] = 0;
        }

        this.allCustomers[index]['totalMoney'] += amount;
        this.allCustomers[index]['transactions'].push(`${isFound.firstName} ${isFound.lastName} made deposit of ${amount}$!`)
        return `${this.allCustomers[index]['totalMoney']}$`
    };

    withdrawMoney(personalId, amount) {
        let isFound = this.allCustomers.find(element => element.personalId === personalId);
        let index = this.allCustomers.indexOf(isFound);

        if (!isFound) {
            throw new Error('We have no customer with this ID!');
        }

        if (this.allCustomers[index]['totalMoney'] < amount) {
            throw new Error(`${isFound.firstName} ${isFound.lastName} does not have enough money to withdraw that amount!`)
        } else {
            this.allCustomers[index]['totalMoney'] -= amount;
            this.allCustomers[index]['transactions'].push(`${isFound.firstName} ${isFound.lastName} withdrew ${amount}$!`)
            return `${this.allCustomers[index]['totalMoney']}$`
        }
    };

    customerInfo(personalId) {
        let isFound = this.allCustomers.find(element => element.personalId === personalId);

        if (!isFound) {
            throw new Error('We have no customer with this ID!');
        }

        let res = [];
        res.push(`Bank name: ${this.bankName}`);
        res.push(`Customer name: ${isFound.firstName} ${isFound.lastName}`);
        res.push(`Customer ID: ${isFound.personalId}`);
        res.push(`Total Money: ${isFound.totalMoney}$`);
        res.push(`Transactions:`)

        for (let i = isFound.transactions.length - 1; i >= 0; i--) {
            let text = `${i + 1}. ${isFound.transactions[i]}`
            res.push(text);
        }
        return res.join('\n')
    }
}

let bank = new Bank('Softuni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

