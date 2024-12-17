
// 1. Object.assign :-  static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);
// returnedTarget.c = 10;
// console.log(returnedTarget);
// console.log(source)

// 2. Object.create() :-     It creates an object with the specified prototype object and properties.

// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
// };

// const me = Object.create(person);
// console.log(me)


// 3. hasOwnProperty :-    This method returns true if the object itself has the property directly. Otherwise it returns false.

// const object1 = Object.create({ key2: "value2" });
// object1.property1 = 42;
// console.log(object1);
// console.log(object1.hasOwnProperty("key2")); // false
// console.log(object1.hasOwnProperty("property1")); // true.

// 4. Object.keys()
// console.log(Object.keys(object1));


// 5. Object.values()
// console.log(Object.values(object1));


// 6. Object.entries() :-   static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// const obj = {
//     key1: "somestring",
//     key2: 42,
// };

// const entriesOfObj = Object.entries(obj);
// console.log(entriesOfObj);


// 7. Object.defineProperty() :-     static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false,
// });

// object1.property1 = 77;
// console.log(object1.property1);