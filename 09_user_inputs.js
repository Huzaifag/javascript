// User inputs in JavaScript can be handled in various ways depending on the environment (browser, Node.js, etc.). Below are examples of how to get user inputs in both a browser and a Node.js environment.

// 1. User Input in Browser using prompt()
// Uncomment the following lines to run in a browser environment
/*
let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");
*/

// 2. User Input in Node.js using readline module
// To run this part, make sure you are in a Node.js environment 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(userName) {
    console.log("Hello, " + userName + "!");
    rl.close();
});

