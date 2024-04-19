// 4 type of variables
/*
    let – is a modern variable declaration.
    var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
    const – is like let, but the value of the variable can’t be changed.
*/


//1 automatically
a = 10;
console.log(a);


// 2 var - re-declared and update, global scope
var b = 5;
console.log(b);
var b = 12;
console.log(b);


//3 let - not re-declared but update, block scope
let c = 7;
console.log(c);
c = 14;
console.log(c);


//4 const - not update and not re-declared, block scope
const e = 8;
console.log(e);