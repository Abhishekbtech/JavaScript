//7 type of operators

//1. Arithmetic
console.log("1. Arithmetic")
let a = 10, b = 5;
console.log(a + b);   // addition
console.log(a - b);   // subtration
console.log(a * b);   // multiplication
console.log(a / b);   // division
console.log(a % b);   // Modules or Remainder
console.log(a ** b);   // Exponentiation
console.log(a++);   // post increment
console.log(a--);   // post decrement
console.log(++a);   // per increment
console.log(--a);   // per decrement


//2 Comparison
console.log("2. Comparison")
let c = 10, d = 20;
if (c == d) { console.log("Equal"); }   	// Equal to
else if (c != d) { console.log("Not equal"); } // Not equal\

if (c > d) { console.log("Greater than"); }       // Greater
if (c < d) { console.log("Less than"); }        // Less
if (c >= d) { console.log("Greater or equal"); }      // Great then equal
if (c <= d) { console.log("Less or equal") };         // less then equal

console.log(c === d);   // Strict equal
console.log(c !== d);   // Strict Not equal


// 3. Assignment
console.log("3. Assignment")
let e = 10;         //Assignment
e += 5;             //Add and assign    
e -= 3;             //Subtract and assign
e *= 4;             //Multiply and assign
e /= 2;             //Divide and assign
e %= 3;             //Modulus and assign
e **= 2;            //Exponentiation and assign


// 4. Logical
console.log("4. Logical")
let f = true, g = false;
console.log(!f);           //Logical NOT
console.log(f && g);       //Logical AND
console.log(f || g);       //Logical OR


// 5. Bitwise
console.log("5. Bitwise")
let h = 60, i = 13;
console.log(h & i);          //Bitwise AND
console.log(h | i);          //Bitwise OR
console.log(h ^ i);          //Bitwise XOR
console.log(~h);             //Bitwise Not
console.log(13 << 2);         //Left shift
console.log(13 >> 2);         //Right Shift
console.log(13 >>> 2);        //Zero fill right shift

// 6. Ternary
console.log("6. Ternary")
let j = 15;
j > 10 ? console.log('Yes') : console.log('No');

// 7. Comma

// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let n = (1 + 2, 3 + 4);
console.log(n)