
// let user = {
//     name: "John",
//     age: 30
// };

// user.sayHi = function () {
//     console.log("Hello!");
// };
// user.sayHi();


// ----------------------------------       or      ----------------------------------------------------


// let user1 = {
//     name: "John",
//     age: 30
// };

// // first, declare
// function sayHi() {
//     console.log("heloo in fun");
// }

// // then add as a method
// user1.sayHi = sayHi;
// user1.sayHi();



// -----------------------------------------        “this” in methods       --------------------------------------------

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log(this.name);
//     }
// };

// user.sayHi();

//  it's will give error

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log(user.name); // leads to an error
//     }
// };

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi();


// “this” is not bound :-    behaves unlike most other programming languages. It can be used in any function, 
// even if it’s not a method of an object.

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//     console.log(this.name);
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); 



// Arrow functions have no “this” :-    they don’t have their “own” this. If we reference this from such a function, 
// it’s taken from the outer “normal” function.

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); 