// loop

/*
    We covered 3 types of loops:
    while – The condition is checked before each iteration.
    do..while – The condition is checked after each iteration.
    for (;;) – The condition is checked before each iteration, additional settings available.
            
    To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, 
    can be stopped with the break directive.

    If we don’t want to do anything in the current iteration and would like to forward to the next one, 
    we can use the continue directive.
    break/continue support labels before the loop. A label is the only way for 
    break/continue to escape a nested loop to go to an outer one.
*/

// 1. while loop
let i = 0;
while (i < 5) {
    console.log("while", i);
    i++;
}


// 2. For loop
for (let j = 0; j < 5; j++) {
    console.log("for", j);
}


// 3. do while loop
let x = 5;
do {
    console.log("do while", x);
    x++;
} while (x < 5)


// 4. for-in loop
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}


// 5. for-of loop
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value);
}