//  7 type of primitive data type

/*
    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    bigint for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    symbol for unique identifiers.
*/

//1 Number
let num = 25;
console.log(typeof num);

//2 String
let name = "Abhi";
console.log(typeof name);

//3 Boolean
let follow = true;
console.log(typeof follow);

//4 undefined
let a;
console.log(typeof a);

//5 null
let b = null;
console.log(typeof b);

//6 BigInt
let ac = BigInt(123);
console.log(typeof ac, ac);

//7 Symbal
let ab = Symbol(123);
console.log(typeof ab, ab);