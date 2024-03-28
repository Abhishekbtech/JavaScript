
/*
    Let’s summarize the type-checking methods that we know:

                    works for	                                                        returns
    typeof	        primitives	                                                        string
    {}.toString	    primitives,built-in objects, objects with Symbol.toStringTag	    string
    instanceof	    objects	                                                            true/false

    As we can see, {}.toString is technically a “more advanced” typeof.
    And instanceof operator really shines when we are working with a class hierarchy and want to check for the class
    taking into account inheritance.
*/


// obj instanceof Class

// class Rabbit { }
// let rabbit = new Rabbit();

// console.log(rabbit instanceof Rabbit);

// // or

// function Rabbit() { }
// console.log(new Rabbit() instanceof Rabbit);

// // or

// let arr = [1, 2, 3];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object);

// // or

// class Animal {}
// class Rabbit extends Animal {}

// let rabbit1 = new Rabbit();
// alert(rabbit1 instanceof Animal); 