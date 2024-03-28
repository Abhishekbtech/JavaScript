// this :-      JavaScript this keyword always holds the reference to a single object, which defines the current line of code’s execution context which means this keyword refers to the object that is currently executing the code.
// In non–strict mode, this is always a reference to an object. In strict mode, it can be any value


// 1. Implicit Binding :-  When we call a function as a method of the object this keyword refers to the calling object
// const test = {
//     prop: 42,
//     func: function () {
//         return this.prop;
//     },
// };
// console.log("Implicit Binding ", test.func());


// 2. Default Binding :-   When this keyword is used in global scope this is set to window object.
// const age = 22;
// function verifyAge() {
//     return this.age;
// }
// console.log("Default Binding ", verifyAge());


// 3. Arrow Function Binding :-     When this is used in the arrow function then this has lexical scope so without the function keyword this is uanble to refer to the object in the outer scope.
// this keyword will be always taken from the PARENT CONTEXT. If we are calling a method inside another method then "this" refers to the parent method's
// const person = {
//     name: "ram",
//     age: 22,
//     greet: () => {
//         return `Hello , you are ${this.age} years old`
//     }
// }
// console.log("Arrow Function Binding ", person.greet());


// or


// console.log("how Arrow Function Binding work..............................")
// let obj = {
//     name: "akash",
//     func: function () {
//         const inner = () => {
//             console.log(`hellooo ${this.name}`);
//         };
//         console.log(`inner function ${this.name}`);
//         inner();
//     },
// };
// obj.func();

// --------------------  or
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };

// user.sayHi(); // Ilya


// 4. Explicit Binding :-   When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.


// a. Call() Method :-  The call method is basically used to invoke the function with different this object

// object.objectMethod.call(objectInstance, arguments)
// ObjectInstance: It is an object which we want to use explicitly
// Arguments: It is arguments that we want to pass to the calling function

// 1 exp -------------------
// console.log("Call() Method 1....")
// const obj1 = {
//     firstName: "First_name",
//     lastName: "Last_name"
// };
// const obj2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// };
// function printName() {
//     console.log(this.firstName + " " + this.lastName);
// }
// printName.call(obj2);


// 2. exp -----------------------
// console.log("Call() Method 2....")
// const obj1 = {
//     firstName: "First_name",
//     lastName: "Last_name"
// };
// const obj2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// };
// function printName(profession, country) {
//     console.log(this.firstName + " " + this.lastName + " " + profession + " " + country);
// }
// printName.call(obj2, "Cricketer", "India");



//  b. Apply() method :-    Just like the call method we can also bind the function to any object. Using apply( ) method also we can invoke a given function with different objects.

// object.objectMethod.apply(objectInstance, arrayOfArguments)
// ObjectInstance: It is an object which we want to use explicitly
// Arguments: It is arguments that we want to pass to the calling function

// 1 exp -------------------
// console.log("Apply() Method 1....")
// const obj1 = {
//     firstName: "First_name",
//     lastName: "Last_name"
// };
// const obj2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// };
// function printName() {
//     console.log(this.firstName + " " + this.lastName);
// }
// printName.apply(obj2);


// 2. exp -----------------------
// console.log("Apply() Method 2....")
// const obj1 = {
//     firstName: "First_name",
//     lastName: "Last_name"
// };
// const obj2 = {
//     firstName: "Sachin",
//     lastName: "Tendulkar"
// };
// function printName(profession, country) {
//     console.log(this.firstName + " " + this.lastName + " " + profession + " " + country);
// }
// printName.apply(obj2, ["Cricketer", "India"]);


// c. bind() Method :-  The bind() method creates a new function that, when called, has the same behavior as the original function
// const car = {
//     brand: 'Lamborghini',
// };
// const printDetail = function (model, topSpeed) {
//     console.log(`${this.brand} ${model} has a top speed of ${topSpeed} mph`);
// };

// const lamboPrintDetail = printDetail.bind(car);
// lamboPrintDetail('Diablo VTTT', 222);
// const reventonPrintDetail = printDetail.bind(car, 'Reventon', 221);
// reventonPrintDetail();