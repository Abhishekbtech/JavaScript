/*
    Static methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a
    concrete class instance.

    For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().

    They are labeled by the word static in class declaration.

    Static properties are used when we’d like to store class-level data, also not bound to an instance.

    The syntax is:

    class MyClass {
        static property = ...;

        static method() {
            ...
        }
    }
    Technically, static declaration is the same as assigning to the class itself:

    MyClass.property = ...
    MyClass.method = ...
*/


// class User {
//     static staticMethod() {
//         console.log(this === User);
//     }
// }

// User.staticMethod(); // true


// //  or


// class User1 { }
// User1.staticMethod = function () {
//     console.log(this === User1);
// };

// User1.staticMethod(); // true


// Static properties

// class Article {
//     static publisher = "Ilya Kantor";
// }

// console.log(Article.publisher);




// Inheritance of static properties and methods


// class Animal {
//     static planet = "Earth";

//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }

//     run(speed = 0) {
//         this.speed += speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }

// }

// // Inherit from Animal
// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }

// let rabbits = [
//     new Rabbit("White Rabbit", 10),
//     new Rabbit("Black Rabbit", 5)
// ];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run(); // Black Rabbit runs with speed 5.

// console.log(Rabbit.planet); // Earth


// or


// class Animal { }
// class Rabbit extends Animal { }

// // for statics
// console.log(Rabbit.__proto__ === Animal); // true

// // for regular methods
// console.log(Rabbit.prototype.__proto__ === Animal.prototype);
