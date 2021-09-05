

const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Simon Stockton
// CSCI 4902
// 
var input;
console.log("Welcome to Simon's Password verification ");

while (input != 'q') {

    rl.question("Please input your password ", (input) => {
        console.log("This password is ")
        if (validatePassword(input)) {
            console.log("Valid")
        }
        else {
            console.log("Invalid")
        }

    })
}