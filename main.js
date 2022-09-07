const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HighPavement92!',
    database: 'bankjs',
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let accounts = [
    {name: 'Peter', balance: 100, active: true, number: 123456789, pin: 1234, lastLogin: null},
    {name: 'John', balance: 200, active: false, number: 987654321, pin: 4321, lastLogin: null},
    {name: 'Mary', balance: 300, active: true, number: 123123123, pin: 1111, lastLogin: null},
];

console.log("Enter account number: ");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentAccount = null;

// Find account with given number
readline.question('', number => {
    const account = accounts.find(account => account.number === parseInt(number) && account.active);
    if (account) {
        console.log(`Account name: ${account.name}`);
        console.log(`Account balance: ${account.balance}`);
        if (account.lastLogin != null) {
            console.log(`Last login: ${account.lastLogin}`);
        }
        currentAccount = account;
        account.lastLogin = new Date();
    } else {
        console.log(`Account not found`);
    }
    readline.close();
});

accounts.push({name: 'Jane', balance: 400, active: true, number: 456456456, pin: 2222, lastLogin: null});

// Get pin input
readline.question('Enter pin: ', pin => {
    if (currentAccount && currentAccount.pin === parseInt(pin)) {
        console.log(`Pin correct`);
    } else {
        console.log(`Pin incorrect`);
    }
    readline.close();
});

increaseBalance(123456789, 100);

function increaseBalance(account, amount) {
    account.balance += amount;
}