// setTimeout allows us to run a function once after the interval of time.

/*
    let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
    Parameters:

    func|code
    Function or a string of code to execute. Usually, that’s a function. For historical reasons, 
    a string of code can be passed, but that’s not recommended.
    delay
    The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
    arg1, arg2…
    Arguments for the function
*/

// function sayHi() {
//     console.log('Hello');
// }
// setTimeout(sayHi, 1000);


// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
// }
// setTimeout(sayHi, 1000, "Hello", "John");


// Canceling with clearTimeout :-   A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId);


// Nested setTimeout

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.


// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);


// both code doing same think 

// let a = 1;
// setInterval(function () {
//     func(a++);
// }, 100);


// let i = 1;
// setTimeout(function run() {
//     func(i++);
//     setTimeout(run, 100);
// }, 100);