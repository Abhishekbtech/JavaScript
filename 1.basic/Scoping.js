/*
    JavaScript variables have 3 types of scope:

    Block scope
    Function scope
    Global scope

    let and const are block scoped
    var is function scoped
*/

//1. Block scope
console.log('1. Block scope')
{
    let x = 2;
}
// x can NOT be used here


//2. Function scope
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}
// code here can NOT use carName


//3. Global scope
let x = 2;
// code here can use x
{
    // code here can also use x
}