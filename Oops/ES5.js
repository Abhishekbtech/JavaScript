// -------------------------------------    Before ES6      -----------------------------------------------------------------


//--------------------------------------    inheritance     -----------------------------------------------------------------


/*
    [[Prototype]] :-     In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification),
    that is either null or references another object. That object is called “a prototype”:
*/

// there are two type we can add proto in inheritance

// 1- adding a new property to an existing object

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit);
// console.log(rabbit.eats);
// console.log(rabbit.jumps);


// 2.

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(rabbit)
// rabbit.walk();


// The prototype chain can be longer:.

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };


// console.log(longEar)
// console.log(rabbit)
// console.log(animal)
// // longEar.walk(); // Animal walk
// // console.log(longEar.jumps); // true (from rabbit)


// F.prototype :-   Remember, new objects can be created with a constructor function, like new F(). If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.
/*
JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.

But in the old times, there was no direct access to it. The only thing that worked reliably was a "prototype" property of the constructor function, described in this chapter. So there are many scripts that still use it.
*/

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.eats);
console.log(rabbit)






// ---------------------------------------  Polymorphism(Method OverRiding)     ---------------------------------------------
// let animal = {
//     eats: true,
//     walk() {
//         /* this method won't be used by rabbit */
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.walk = function () {
//     console.log("Rabbit! Bounce-bounce!");
// };

// animal.walk()
// rabbit.walk(); // Rabbit! Bounce-bounce!