// Functions in JavaScript: Declaration, Expression, Arrow Functions

// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 4));

// 3. Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(5, 6));

// 4. Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Default exponent 2
console.log(power(2, 3)); // Exponent 3

// 5. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately upon definition!");
})();

// 6. Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 7. Higher-Order Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const sum = (x, y) => x + y;
console.log(applyOperation(10, 20, sum)); // Output: 30

// 8. Function with Rest Parameters
function concatenateStrings(...strings) {
    return strings.join(" ");
}
console.log(concatenateStrings("Hello", "world!", "How", "are", "you?"));

// 9. Function with Callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Fetched Data:", data);
});

// 10. Function Returning Another Function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = makeMultiplier(2);
console.log(double(5)); // Output: 10


// Summary: This code demonstrates various ways to define and use functions in JavaScript, including declarations, expressions, arrow functions, default parameters, IIFEs, recursion, higher-order functions, rest parameters, callbacks, and functions returning other functions.