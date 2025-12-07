// Scope in JavaScript: Global, Local, Block Scope (var, let, const)
// 1. Global Scope
var globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // Accessible here
}
globalScopeExample();
console.log(globalVar); // Accessible here too

// 2. Local Scope
function localScopeExample() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
localScopeExample();
console.log(localVar); // Error: localVar is not defined

// 3. Block Scope with let and const
function blockScopeExample() {
    if (true) {
        let blockVarLet = "I am a block-scoped variable (let)";
        const blockVarConst = "I am a block-scoped variable (const)";
        console.log(blockVarLet); // Accessible here
        console.log(blockVarConst); // Accessible here
    }
    console.log(blockVarLet); // Error: blockVarLet is not defined
    console.log(blockVarConst); // Error: blockVarConst is not defined
}

blockScopeExample();

// 4. var is function-scoped, not block-scoped
function varScopeExample() {
    if (true) {
        var functionVar = "I am function-scoped variable (var)";
        console.log(functionVar); // Accessible here
    }
    console.log(functionVar); // Accessible here too
}
varScopeExample();
// 5. Summary
// - var is function-scoped
// - let and const are block-scoped
// - Global variables are accessible everywhere
// - Local variables are accessible only within their function