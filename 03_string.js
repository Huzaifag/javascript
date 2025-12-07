// Strings in JavaScript are used to represent text. They are a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

// 1. Creating Strings
let singleQuoteString = 'Hello, World!'; // Using single quotes
let doubleQuoteString = "Hello, World!"; // Using double quotes
let backtickString = `Hello, World!`; // Using backticks (template literals)

// 2. String Properties and Methods
let sampleString = "JavaScript is awesome!";
console.log("String Length:", sampleString.length); // Length of the string

// Common String Methods    
console.log("To Upper Case:", sampleString.toUpperCase()); // Convert to uppercase
console.log("To Lower Case:", sampleString.toLowerCase()); // Convert to lowercase
console.log("Includes 'is':", sampleString.includes("is")); // Check if substring exists
console.log("Index of 'awesome':", sampleString.indexOf("awesome")); // Find index of substring
console.log("Slice (0, 10):", sampleString.slice(0, 10)); // Extract a part of the string
console.log("Replace 'awesome' with 'great':", sampleString.replace("awesome", "great")); // Replace substring

// 3. Template Literals
let name = "Alice";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);

// 4. String Concatenation
let str1 = "Hello, ";
let str2 = "how are you?";
let concatenatedString = str1 + str2;
console.log(concatenatedString);
// 5. Escape Characters
let stringWithQuotes = "He said, \"JavaScript is fun!\"";
console.log(stringWithQuotes);
let stringWithNewLine = "Hello,\nWorld!";
console.log(stringWithNewLine);
// 6. Summary
console.log("Summary of Strings in JavaScript:");
console.log("Strings can be created using single quotes, double quotes, or backticks.");
console.log("Common string methods include toUpperCase(), toLowerCase(), includes(), indexOf(), slice(), and replace().");
console.log("Template literals allow embedding expressions using `${expression}`.");
console.log("Strings can be concatenated using the + operator.");
console.log("Escape characters like \\\" and \\n are used for quotes and new lines within strings.");