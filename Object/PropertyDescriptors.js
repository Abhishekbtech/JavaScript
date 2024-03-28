let obj = {
    name: "Abhishek Chauhan",
    class: 10,
    age: 20
}

// Property flags and descriptors


// Property flags :-    Object properties, besides a value, have three special attributes (so-called “flags”):
// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

/*
    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName, descriptor);
    obj
    The object to get information from.
    propertyName
    The name of the property.
*/

// or

/*
    Object.defineProperty(obj, propertyName, descriptor)
    obj, propertyName
    The object and its property to apply the descriptor.
    descriptor
    Property descriptor object to apply.
*/

const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptorOfName, "orginal property descriptoe");


// 1. writable
// descriptorOfName.writable = false; // making it non-writeable
// console.log("After changing writability of 'name' to false : ", descriptorOfName)

// or

// Object.defineProperty(obj, "name", {
//     writable: false,
// });
// console.log("After changing writability of 'name' to false : ", Object.getOwnPropertyDescriptor(obj, "name"));

// obj.name = "Abhi";
// console.log(obj);


// 2. enumerable:-  if true, then listed in loops, otherwise not listed. we can't see the that  property in for...in loop but we can see in for...of loop.
// Object.defineProperty(obj, "name", {
//     enumerable: false,
// });

// for (let key in obj) {
//     console.log(key, "enum");
// }


// 3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
// Object.defineProperty(obj, "name", {
//     configurable: false,
// });
// delete obj.name;
// console.log(obj, "after the delete");

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// or

// Object.seal(obj)
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 4. Object.freeze(obj) :-     Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 5. Object.isFrozen(obj) :-   Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
console.log(Object.isFrozen(obj));


// 6. Object.isSealed(obj) :-   Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
console.log(Object.isSealed(obj));


// 7. Object.freeze(obj) :- Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
Object.freeze(obj)
console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// 8. Object.preventExtensions(obj) :-  Forbids the addition of new properties to the object.
const object1 = {};
Object.preventExtensions(object1);
try {
    Object.defineProperty(object1, 'property1', {
        value: 42,
    });
} catch (e) {
    console.log(e);
    // Expected output: TypeError: Cannot define property property1, object is not extensible
}
