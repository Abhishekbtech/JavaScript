//  Type Conversion
/*
    String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

    Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

    Value	        Becomes…
    undefined	    NaN
    null	        0
    true / false	1 / 0
    string	        The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
    
    Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).
    Value	                        Becomes…
    0, null, undefined, NaN, ""	    false
    any other value	                true
    
    Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:
    undefined is NaN as a number, not 0.
    "0" and space-only strings like " " are true as a boolean.
*/

// 1. String
let x = 123;
console.log(typeof x, x);
console.log(typeof String(x), String(x));

let y = 12;
console.log(typeof y, y);
console.log(typeof y.toString, y.toString);


// 2. Number
let z = "123";
console.log(typeof z, z);
console.log(Number("123"), typeof Number("123"));


// 3. Boolean
// Number -> Boolean
console.log(Boolean(0)); // false
Boolean(1); // true
Boolean(100); // true

// Boolean(anyNumber Except 0) // Give True

// String -> Boolean

console.log(Boolean("0")); // true
Boolean("1"); // true

// Boolean(any length of string except 0) // Give True./