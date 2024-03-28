
// 1. Constructor Method within Classes:-   You can define a constructor method within a class using the constructor keyword. This method is automatically called when an object is instantiated from the class.
// after ES6 , JavaScript now has class syntax which is a syntactic sugar over the prototype-based inheritance.

//1. Default Constructor - It is a constructor that doesn't take any arguments and it It is a constructor which doesn't take any arguments and it A constructor that is called when an object is created without any arguments
// class Person {
//     abhi() {
//         console.log("Hello World");
//     }
// }
// const john = new Person();
// console.log(john);
// john.abhi();


// 2.  Parameterized Constructor (or) Method Syntax
// class Person {
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     naa() {
//         console.log(this.name + " " + this.age)
//     }
// }

// const abhi = new Person("John", 30);
// console.log(abhi);
// abhi.naa();
// The parameterless constructor is called when we don't provide any argument while creating an object of a class.



// ------------------- BEFORE CLASS KEYWORD (BEFORE ES6)  CONSTRUCTOR FUNCTION -------------


// function Person1(name, age) {
//     // this is a object created by the function
//     this.name = name;
//     this.age = age;
// }
// Person1.prototype.showNameAndAge = function () {
//     console.log(`My Name Is ${this.name} And I am ${this.age}`);
// };
// let personPrototypeObj = new Person1('Abhi', 25);
// console.log(personPrototypeObj)
// personPrototypeObj.showNameAndAge();


// // ------------------ or ---------------


// function PersonFunc(inputName, inputAge) {
//     this.name = inputName;
//     this.age = inputAge;

//     this.canPersonWalk = function () {
//         console.log("yes i can walk constructor func");
//     };
// }

// const amithObject = new PersonFunc("amith", 19);
// const priyankaObject = new PersonFunc("priyanka", 20);
// amithObject.canPersonWalk();

// console.log(amithObject);
// console.log(priyankaObject);