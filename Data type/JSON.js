/*
    The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in 
    RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. 
    So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on 
    Ruby/PHP/Java/Whatever.

    JavaScript provides methods:

    JSON.stringify to convert objects into JSON.
    JSON.parse to convert JSON back into an object.
*/



//  JSON.stringify

/*
    JSON.stringify can be applied to primitives as well.

    JSON supports following data types:

    Objects { ... }
    Arrays [ ... ]
    Primitives:
    strings,
    numbers,
    boolean values true/false,
    null.
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!
console.log(json);

/*
    JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by
    JSON.stringify.

    Namely:

    Function properties (methods).
    Symbolic keys and values.
    Properties that store undefined.
*/

// let user = {
//     sayHi() { // ignored
//         console.log("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
// };

// console.log(JSON.stringify(user)); // {} (empty object)


// Excluding and transforming: replacer
/*
    let json = JSON.stringify(value[, replacer, space])
    value
    A value to encode.
    replacer
    Array of properties to encode or a mapping function function(key, value).
    space
    Amount of space to use for formatting
*/

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };

// let meetup = {
//     title: "Conference",
//     room
// };

// console.log(JSON.stringify(room)); // 23
// console.log(JSON.stringify(meetup));

// -----------------------------        JSON.parse       --------------------------

/*
    let value = JSON.parse(str[, reviver]);
    str
    JSON-string to parse.
    reviver
    Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
*/

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);
// console.log(numbers[1]); // 1

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userData);
// console.log(user.friends[1]); // 1


// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });

// console.log(meetup.date.getDate()); // now works!