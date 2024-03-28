/*
    To extend a class: class Child extends Parent:
    That means Child.prototype.__proto__ will be Parent.prototype, so methods are inherited.
    When overriding a constructor:
    We must call parent constructor as super() in Child constructor before using this.
    When overriding another method:
    We can use super.method() in a Child method to call Parent method.
    Internals:
    Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.
    So it’s not safe to copy a method with super from one object to another.
*/



// Inheritance :-   Inheritance in JavaScript is a mechanism that allows us to create new classes based on existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class. The JavaScript extends keyword is used to create a child class based on a parent class.

// extends :-   is used to create a class that is a child of another class.
// overridden :- parent and child classes both contain the same function with a different definition.

/*
Super Keyword :- that allows you to access and call methods on an object's parent class. It is used in classes to call the constructor of the parent class, and to access the parent's properties and methods.
super.method(...) to call a parent method.
super(...) to call a parent constructor (inside our constructor only).
*/


//-----------------------------------------------------Class inheritance after ES6----------------------------------------------------



// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still. and i am in parent`);
//     }
// }

// let animal = new Animal("My animal");
// console.log(animal)
// animal.run(5)
// animal.stop()

// class Rabbit extends Animal {
//     constructor(name, age) {      // override
//         super(name); // calling the parent's constructor
//         this.age = age;
//     }

//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {    // override
//         super.stop(); // calling the parent method using 'super' keyword
//         console.log("i am stop in child"); // it will not call the super class method, because we have overwritten it here.
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 4);
// console.log(rabbit)
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();




// -----------------------------------------------------befor ES6  inheritance---------------------------------------------------------



function StudentFunc(name, standard) {
    this.name = name;
    this.standard = standard;
}

StudentFunc.prototype.markAttendance = function () {
    console.log(`hey there ${this.name} is present: Normal classroom attance`);
};

StudentFunc.prototype.grades = function () {
    console.log("grades nice");
};

const abhiFunc = new StudentFunc("abhi", 9);
console.log(abhiFunc);


function SportsCaptainFunc(name, stand, favTool) {
    // context = this = {}
    // call the super class
    // whatever context is with the CHILD should also go to the parent.
    StudentFunc.call(this, name, stand);

    this.favTool = favTool;
}

function extendsss() {
    const objectWithParentPrototype = Object.create(StudentFunc.prototype); // {} [[protye]] = parent
    SportsCaptainFunc.prototype = objectWithParentPrototype;

    // we loose the child Constructor  and child Mehtods ------

    SportsCaptainFunc.prototype.constructor = SportsCaptainFunc;
}
extendsss();

SportsCaptainFunc.prototype.markAttendance = function () {
    console.log(`sports captain ${this.name} is present in the ground`);
};

SportsCaptainFunc.prototype.routine = function () {
    console.log("play cricket all day and do not study");
};

const viratFunc = new SportsCaptainFunc("virat", 12, "bat");
console.log(viratFunc);




// --------------------------------------       Prototypal inheritance      -----------------------------------------

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // we can find both properties in rabbit now:
// console.log(rabbit.eats); // true (**)
// console.log(rabbit.jumps)


//  or


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

// // walk is taken from the prototype chain
// longEar.walk(); // Animal walk
// console.log(longEar.jumps);


// 