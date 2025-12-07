// 1. Arithmetic Operators

let a = 10;
let b = 3;
console.log("Arithmetic Operators:");
console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.3333...
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000 (10^3)
console.log("Increment:", ++a); // 11
console.log("Decrement:", --b); // 2    
console.log("");
// 2. Comparison Operators  
let x = 5;
let y = '5';
console.log("Comparison Operators:");
console.log("Equal (==):", x == y); // true
console.log("Strict Equal (===):", x === y); // false
console.log("Not Equal (!=):", x != y); // false
console.log("Strict Not Equal (!==):", x !== y); // true
console.log("Greater Than (>):", x > 3); // true
console.log("Less Than (<):", x < 10); // true
console.log("Greater Than or Equal (>=):", x >= 5); // true
console.log("Less Than or Equal (<=):", x <= 4); // false
console.log("");
// 3. Logical Operators
let p = true;
let q = false;
console.log("Logical Operators:");
console.log("AND (&&):", p && q); // false
console.log("OR (||):", p || q); // true
console.log("NOT (!):", !p); // false
console.log("");

// 4. Assignment Operators
let c = 10;
console.log("Assignment Operators:");
c += 5; // c = c + 5
console.log("c += 5:", c); // 15
c -= 3; // c = c - 3
console.log("c -= 3:", c); // 12
c *= 2; // c = c * 2
console.log("c *= 2:", c); // 24
c /= 4; // c = c / 4
console.log("c /= 4:", c); // 6
c %= 4; // c = c % 4
console.log("c %= 4:", c); // 2
console.log("");

// 5. Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Ternary Operator:");
console.log("Can vote:", canVote);

// 6. Typeof Operator
console.log("Typeof Operator:");
console.log("Type of a:", typeof a); // number
console.log("Type of p:", typeof p); // boolean
console.log("Type of 'Hello':", typeof "Hello");    // string
console.log("Type of {}:", typeof {}); // object
console.log("Type of []:", typeof []); // object
console.log("Type of function():", typeof function(){}); // function
console.log("");    

// 7. Summary
console.log("Summary of Operators in JavaScript:");
console.log("Arithmetic Operators: +, -, *, /, %, **, ++, --");
console.log("Comparison Operators: ==, ===, !=, !==, >, <, >=, <=");
console.log("Logical Operators: &&, ||, !");
console.log("Assignment Operators: =, +=, -=, *=, /=, %=");
console.log("Ternary Operator: condition ? expr1 : expr2");
console.log("Typeof Operator: typeof");