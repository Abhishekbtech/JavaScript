// Closures :-  is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 


// Lexical scoping :-   

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

/* init() creates a local variable called name and a function called displayName().
The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function.
Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions,
displayName() can access the variable name declared in the parent function, init().
*/


// Closure
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();