// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it.

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));