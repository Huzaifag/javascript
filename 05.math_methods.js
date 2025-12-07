// Math methods in JavaScript provide various functions to perform mathematical operations such as rounding, finding the maximum or minimum value, generating random numbers, and more.

// 1. Rounding Methods
let num1 = 4.7;
console.log("Rounding Methods:");
console.log("Math.round(4.7):", Math.round(num1));

console.log("Math.floor(4.7):", Math.floor(num1));

console.log("Math.ceil(4.7):", Math.ceil(num1));
console.log("");

// 2. Maximum and Minimum
let numbers = [3, 7, 2, 9, 4];
console.log("Maximum and Minimum:");
console.log("Math.max(3, 7, 2, 9, 4):", Math.max(...numbers));

console.log("Math.min(3, 7, 2, 9, 4):", Math.min(...numbers));

console.log("");
// 3. Power and Square Root
let base = 5;
let exponent = 3;
console.log("Power and Square Root:");
console.log("Math.pow(5, 3):", Math.pow(base, exponent));
console.log("Math.sqrt(25):", Math.sqrt(25));

console.log("");
// 4. Random Numbers
console.log("Random Numbers:");
console.log("Math.random():", Math.random());
console.log("Math.floor(Math.random() * 100):", Math.floor(Math.random() * 100)); // Random number between 0 and 99
console.log("");

// 5. Other Math Methods
let angle = Math.PI / 4; // 45 degrees in radians
console.log("Other Math Methods:");
console.log("Math.sin(PI/4):", Math.sin(angle));
console.log("Math.cos(PI/4):", Math.cos(angle));
console.log("Math.tan(PI/4):", Math.tan(angle));
console.log("Math.log(10):", Math.log(10)); // Natural logarithm
console.log("Math.exp(2):", Math.exp(2));
console.log("");
// 6. Summary
console.log("Summary of Math Methods in JavaScript:");
console.log("Rounding methods: Math.round(), Math.floor(), Math.ceil()");
console.log("Finding maximum and minimum: Math.max(), Math.min()");
console.log("Power and square root: Math.pow(), Math.sqrt()");
console.log("Generating random numbers: Math.random()");
console.log("Other methods: Math.sin(), Math.cos(), Math.tan(), Math.log(), Math.exp()");