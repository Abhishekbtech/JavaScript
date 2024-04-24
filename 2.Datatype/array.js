const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = ["Apple", "Orange", "Apple", "Mango"];
const fru = [40, 100, 1, 5, 25, 10];
const numbers = [45, 4, 9, 16, 25];



// length :-    The length property returns the length (size) of an array
// console.log("Length: ", fruits.length); 


// toString() :-    converts an array to a string of (comma separated) array values
// console.log("toString(): ", fruits.toString());


// at()/[] :-    method returns an indexed element from an array.   The at() method returns the same as [].
// console.log("at() ", fruits.at(2));
// console.log("[ ]", fruits[2]);


// To add/remove elements

/*
    push(...items) – adds items to the end,
    pop() – extracts an item from the end,
    shift() – extracts an item from the beginning,
    unshift(...items) – adds items to the beginning.
    splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
    slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
    concat(...items) – returns a new array: copies all members of the current one and adds items to it. 
        If any of items is an array, then its elements are taken.
*/


// pop() :-     method removes the last element from an array
// console.log("pop() ", fruits.pop());


// push() :-    method adds a new element to an array (at the end) but it's print length of array
// console.log("push() ", fruits.push("Kiwi"));


// shift() :-   method removes the first array element and "shifts" all other elements to a lower index 
// console.log("shift() ", fruits.shift());


// unshift() :- method adds a new element to an array (at the beginning), and "unshifts" older elements but it's print length of array
// console.log("unshift() ", fruits.unshift("Strawberry"));


// delete() :-  leaves undefined holes in the array
// console.log("delete ",delete fruits[1]);


// splice() :-  method can be used to add new items to an array it's use for delete  also
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// console.log("splice() ", fruits.splice(2, 0));

// toSpliced() :-   method as a safe way to splice an array without altering the original array


// slice() :-   method slices out a piece of an array into a new array
// console.log("slice() ", abhi.slice(1, 3));


// concat() :-  method creates a new array by merging (concatenating) existing arrays. method can also take strings as arguments
// let abhi = ["Banana", "Orange", "Apple", "Mango"];
// let vegetables = ["Carrot", "Tomato", "Cucumber"];
// console.log("concat() ", abhi.concat(vegetables));



// To search among elements

/*
    indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
    includes(value) – returns true if the array has value, otherwise false.
    find/filter(func) – filter elements through the function, return first/all values that make it return true.
    findIndex is like find, but returns the index instead of a value.
*/

//  indexOf() :-    method searches an array for an element value and returns its position.
// console.log("indexOf() ", fruit.indexOf("Apple"));


// lastIndexOf() :-     is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element
// console.log("lastindexof() ", fruit.lastIndexOf("Apple"));


// includes() :-     This allows us to check if an element is present in an array (including NaN, unlike indexOf). it's give boolean value
// console.log("includes() ", fruit.includes("Mango"));


// find() :-    method returns the value of the first array element that passes a test function
// console.log("find() ", fruit.find((value) => { return value === 'Apple' }));


// findIndex() :-   method returns the index of the first array element that passes a test function.
// console.log("findIndex() ", fruit.findIndex((value) => { return value === "Apple" }));


// findLast() :-    method that will start from the end of an array and return the value of the first element that satisfies a condition.
// console.log("findLast() ", fruit.findLast((value) => { return value === 'Apple' }));


// findLastIndex() :-   method finds the index of the last element that satisfies a condition.
// console.log("findIndex() ", fruit.findLastIndex((value) => {return value === "Apple"}));


// filter() :-  method creates a new array with array elements that pass a test.
// const evenNums = numbers.filter(function(num){
//     return num % 2 == 0;
// });
// console.log("filter() ", evenNums);



// To iterate over elements
/*
    forEach(func) – calls func for every element, does not return anything.
*/


// forEach() :- method calls a function (a callback function) once for each array element
// numbers.forEach(fun);
// function fun(value, index, itself) {
//     console.log("value ", value);
// }



// To transform the array

/*
    map(func) – creates a new array from results of calling func for every element.
    sort(func) – sorts the array in-place, then returns it.
    reverse() – reverses the array in-place, then returns it.
    split/join – convert a string to array and back.
    reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for 
        each element and passing an intermediate result between the calls.
*/

// map() :-     method creates a new array by performing a function on each array element,  method does not execute the function for array elements without values,  method does not change the original array.
// const squaredNumbers = numbers.map(mape)
// function mape(value, index, itself){
//     return value * value;
//     // return value % 2 == 0;
// }
// console.log("map() ", squaredNumbers);


// sort() :-    method sorts an array alphabetically it's change in original array
// console.log("sort() ", fru.sort());


// reverse() :- sort an array in descending order it's change in original array
// console.log("reverse() ", fru.reverse());


// toSorted() :-    method as a safe way to sort an array without altering the original array
// const sorted = fru.toSorted();
// console.log("toSorted() ", sorted);


// toReversed() :-  method as a safe way to reverse an array without altering the original array
// const reversed = sorted.toReversed();
// console.log("toReversed() ", reversed);


// Numeric Sort :- it's changer into orginal array
// const points = [40, 100, 1, 5, 25, 10];
// console.log("Numeric sort ", points.sort((a, b) => a - b));
// console.log("Numeric reversed ", points.sort((a, b) => b - a));// sort() :-    method sorts an array alphabetically it's change in original array
// console.log("sort() ", fru.sort());


// split()/join() :-    method also joins all array elements into a string.  It behaves just like toString(), but in addition you can specify the separator
// console.log("join() ", fruits.join(" * "));


// // reduce() :-  method runs a function on each array element to produce (reduce it to) a single value
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log("reduce() ", sum);


// // reduceRight() :- method runs a function on each array element to produce (reduce it to) a single value.
// // The only difference between reduce and reduceRight is that the former goes from left to right while the
// // latter goes from right to left.
// let product = numbers.reduceRight(function(currentVal, accumulator){
//     return currentVal * accumulator;
// }, 1);
// console.log("reduceRight() ", product);



// Additionally:

// Array.isArray(value) 

// alert(typeof {}); // object
// alert(typeof []); // object (same)

// alert(Array.isArray({})); // false
// alert(Array.isArray([])); // true


// every() :-   method checks if all array values pass a test.  It return true other wise false
// let allOver18 = numbers.every(myFun);

// function myFun(value, index, array) {
//   return value > 18;
// }
// console.log("every() ",allOver18)


// some() :-    method checks if some array values pass a test  It return true other wise false
// let someOve = numbers.some(myFunct);

// function myFunct(value, index, array) {
//   return value > 18;
// }
// console.log("some() ", someOve)


// copyWithin() :-  method copies array elements to another position in an array
// console.log("copyWithin() ", fruits.copyWithin(2, 0));
// console.log("copyWithin() ", fruits.copyWithin(2, 0, 2));


// flat() :-    method creates a new array with sub-array elements concatenated to a specified depth
// const myArr = [[1, 2], [3, 4], [5, 6]];
// console.log("flat() ", myArr.flat());


// flatMap() :-     method first maps all elements of an array and then creates a new array by flattening the array.
// const newArr = numbers.flatMap((x) => x * 2);
// console.log("flatMap() ", newArr);


// Array.prototype.fill() :-    fill(value, start, end)

const array1 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]



// Math.max.apply() :-    Math.max.apply to find the largest number in an array
// console.log("Math.max.apply ", Math.max.apply(null, fru));


// Math.min.apply() :-    Math.min.apply to find the lowest number in an array
// console.log("Math.min.apply ", Math.min.apply(null, fru));


// Math.random() :-  generate random numbers between 0 and 1
// console.log("Math.random sort ", fru.sort(() => 0.5 - Math.random()));


// Array.from() :-  method returns an Array object from any object with a length property or any iterable object.
// console.log("Array.from()", Array.from("ABCDEFG"));


// with() :-    method as a safe way to update elements in an array without altering the original array
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log("with() ", myMonths);
// console.log("orgnal arr", months);