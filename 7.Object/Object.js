// Object :-    objects are used to store keyed collections of various data and more complex entities.
// In JavaScript, an object can be created using a literal notation or by constructor function.

// Literals and properties
// const abhi = {
//     name: "Abhishek",
//     age: 23,
// }

// get
// console.log(abhi);
// console.log(abhi.name);
// console.log(abhi["age"]);

// // edit or update
// abhi.name = "Abhishek Chauhan";
// abhi.class = 10;  // this will add the property 'class' in the object is there class already in object it will update classs other wise create new key and value
// console.log(abhi);

// // delete
// delete abhi.age;
// console.log(abhi["age"]);



// Computed properties :-   We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert(bag.apple);



// -----------------------------    Object references and copying
/*
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”,
whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

A variable assigned to an object stores not the object itself, but its “address in memory” –
in other words “a reference” to it.
*/


// let message = "Hello!";
// let phrase = message;    //both have same value but both store in diffrent addresh
// delete message;
// console.log(phrase);


// Comparison by reference :-   Two objects are equal only if they are the same object.

// let a = { 1: 0 };
// let b = a;                  // copy the reference
// b.abhi = "hello";
// console.log(a); // true, both variables reference the same object
// console.log(b); // true, both variables reference the same object and the same type

// let c = { 1: 0 };
// let d = { 1: 0 }; // two independent objects
// console.log(c == d); // false



// Cloning and merging, Object.assign  :-   copying an object variable creates one more reference to the same object.

// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {};     // the new empty object
// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// console.log(user)
// console.log(clone)
// clone.name = "Pete"; // changed the data in it
// console.log("clone", clone);
// console.log("user", user); // still John in the original object



// // Nested cloning   :-  Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

// let users = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// console.log(users.sizes.height); // 182

// Object.assign for the so-called “shallow copy” (nested objects are copied by reference)

// let user1 = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone = Object.assign({}, user1);
// let new1 = user1;
// console.log("new1", new1)
// console.log(user1.sizes === clone.sizes); // true, same object
// // user and clone share sizes

// console.log("clone",clone)
// user1.sizes.width = 60;    // change a property from one place
// console.log(clone.sizes.width); // 60, get the result from the other one



// structuredClone :-   The call structuredClone(object) clones the object with all nested properties.
// “deep cloning” function structuredClone or use a custom cloning implementation,

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = structuredClone(user);
// console.log(user.sizes === clone.sizes); // false, different objects
// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log(clone.sizes.width); // 50, not related



// Garbage collection :-    when an object is no longer referenced by any code in your program, it becomes eligible

// Declare an object
// var object_1 = {
//     object_2: {
//         object_3: 7
//     }
// };
// console.log("1", object_1)
// // In this example, create two objects
// // One object is referred by another
// // as one of its properties. Currently,
// // none can be garbage collected

// // The "object_4" variable is the second
// // thing that has a reference to the object
// var object_4 = object_1;
// console.log("4", object_4)
// // The object that was originally in
// // "object_1" has a unique reference
// // embodied by the "object_4" variable
// object_1 = 1;

// //Reference to "object_2" property of
// // the object. This object now has 2
// // references: 1 as a property,
// // The other as the "object_5" variable.
// var object_5 = object_4.object_2;
// console.log("5", object_5)
// // The object that was in "object_1" has
// // now zero references to it. It can be
// // garbage-collected. However its "object_2"
// // property is still  referenced by the
// // "object_5" variable, so it cannot be freed.
// object_4 = "Geeks For Geeks";

// // Now the "object_2" property has no
// // references to it and hence it can
// // be garbage collected.
// object_5 = null;

// console.log(object_1)
// // console.log(object_2)
// // console.log(object_3)
// console.log(object_4)
// console.log(object_5)


// Object.keys, values, entries
/*
    For plain objects, the following methods are available:

    Object.keys(obj) – returns an array of keys.
    Object.values(obj) – returns an array of values.
    Object.entries(obj) – returns an array of [key, value] pairs.
*/

// let user = {
//     name: "John",
//     age: 30
// };
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [["name", "John"], ["age", 30]]

// for (let value of Object.values(user)) {
//     console.log(value); // John, then 30
// }