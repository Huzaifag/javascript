// Datatypes and Variables in JavaScript

// 1. Primitive Data Types
let myString = "Hello, World!"; // String
let myNumber = 42; // Number
let myBoolean = true; // Boolean
let myUndefined; // Undefined
let myNull = null; // Null
let mySymbol = Symbol("unique"); // Symbol
let myBigInt = 9007199254740991n; // BigInt

// 2. Complex Data Types
let myObject = { name: "Alice", age: 30 }; // Object
let myArray = [1, 2, 3, 4, 5]; // Array
let myFunction = function() { return "I am a function"; }; // Function

// 3. Variable Declarations
var oldVar = "I am a var"; // Function-scoped variable
let myLet = "I am a let"; // Block-scoped variable
const myConst = "I am a const"; // Block-scoped constant
// myConst = "Trying to change"; // This will throw an error

// 4. Dynamic Typing
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // string
dynamicVar = 100;
console.log(typeof dynamicVar);

// 5. Type Coercion
let coercedSum = "5" + 10; // "510" (string)
let coercedProduct = "5" * 10; // 50 (number)

// 6. Checking Types
console.log(typeof myString); // string
console.log(typeof myNumber); // number
console.log(typeof myBoolean); // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof myNull); // object (this is a known JavaScript quirk)
console.log(typeof mySymbol); // symbol
console.log(typeof myBigInt); // bigint
console.log(typeof myObject); // object
console.log(typeof myArray); // object (arrays are objects in JavaScript)
console.log(typeof myFunction); // function

// 7. Summary
console.log("Datatypes and Variables in JavaScript:");
console.log("Primitive Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt");
console.log("Complex Types: Object, Array, Function");
console.log("Variable Declarations: var, let, const");
console.log("JavaScript is dynamically typed and supports type coercion.");