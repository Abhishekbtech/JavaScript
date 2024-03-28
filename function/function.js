// function is a set of statements that take inputs, do some specific computation, and produce output.

// 1. Function Declaration
// function calcAddition(number1, number2) {
//     console.log(number1 + number2);
//     return number1 + number2;
// }
// // console.log("Function Declaration ", calcAddition(6, 9));
// calcAddition(6, 9)


// 2. Function expressions
// const square = function (number) {
//   // return number * number;
//   console.log(number * number);
// };
// // const x = square(4);
// square(4);
// console.log("Function Expressions ",x);

// 3.  Arrow Function
// let add = (a, b) => a+b
// console.log("Arrow Function ",add(5, 7));


// Function with varibales
// let c = 10;
// function funcWithVar(a, b) {
//     return a * c + b * c;
// }
// console.log("Function With Varibales ", funcWithVar(4, 2))


// Function with default Value
// function funwith(name, age = 24) {
//     return `My name is ${name} and i am ${age} old `;
// }
// console.log("Function With default vale ", funwith('John'))
// console.log("Function With default vale ", funwith('John', 25))


// Rest operator(...)
// function fun(...input) {
//     let sum = 0;
//     for (let i of input) {
//         sum += i;
//     }
//     return sum;
// }
// console.log("Rest operator ", fun(1, 2));
// console.log("Rest operator ", fun(1, 2, 3));
// console.log("Rest operator ", fun(1, 2, 3, 4, 5));


// Pass By Value :- the function is called by directly passing the value of the variable as an argument. So any changes made inside the function do not affect the original value.
// function Passbyvalue(a, b) {
//     let tmp;
//     tmp = b;
//     b = a;
//     a = tmp;
//     console.log(`Inside Pass by value function -> a = ${a} b = ${b}`);
// }
// let a = 1;
// let b = 2;
// console.log(`Before calling Pass by value Function -> a = ${a} b = ${b}`);
// Passbyvalue(a, b);
// console.log(`After calling Pass by value Function -> a = ${a} b = ${b}`);


// Pass by Reference :- Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
// function PassbyReference(obj) {
//     let tmp = obj[0];
//     obj[0] = obj[1];
//     obj[1] = tmp;

//     console.log(`Inside Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);
// }

// let obj = [10, 20]
// console.log(`Before calling Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);
// PassbyReference(obj)
// console.log(`After calling Pass By Reference Function -> a = ${obj[0]} b = ${obj[1]}`);


// Pure Functions :- A pure function is a function that always returns the same output when given the same input, and it does not have any side effects
// function geek(value) {
//     return value + 100;
// }
// console.log("Pure Functions ", geek(34));

// // Impure Functions:- Impure functions are functions that can modify the state of the application or have side effects.
// function incrementflag(flag) {
//     flag++;
//     return flag;
// }
// console.log("Impure Functions ", incrementflag(1));


// Higher-Order Function :- A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function.
// const greet =  function(name){
//     return function(m){
//       console.log(`Hi!! ${name}, ${m}`);
//     }
// }

// const greet_message = greet('ABC');


// callback function :-  is a function passed into another function as an argument same as above
// let value = 1;

// const abhi = doSomething(() => {
//   value = 2;
// });

// console.log(value);


// Callback function, passed as a parameter in the higher order function
// function callbackFunction() {
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(fun) {
//     console.log('I am higher order function')
//     return fun();
// }

// higherOrderFunction(callbackFunction);



// ----------------------------     Immediately Invoked Function Expression (IIFE)      -----------------------------------
/*
    (function () {
    // …
    })();

    (() => {
    // …
    })();

    (async () => {
    // …
    })();
*/

(function () {
    console.log("Hello, world!");
})();


((x, y) => {
    console.log(x + y);
})(10, 20);