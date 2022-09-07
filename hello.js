const accounts = [
    {name: 'Peter', balance: 100, active: true, number: 123456789},
    {name: 'John', balance: 200, active: false, number: 987654321},
    {name: 'Mary', balance: 300, active: true, number: 123123123},
];

console.log("Enter account number: ");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Find account with given number
readline.question('', number => {
    const account = accounts.find(account => account.number === parseInt(number));
    if (account) {
        console.log(`Account name: ${account.name}`);
        console.log(`Account balance: ${account.balance}`);
    } else {
        console.log(`Account not found`);
    }
    readline.close();
});

