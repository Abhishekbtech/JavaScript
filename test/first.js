// Write a JavaScript function to check if a given string is a palindrome.

const str = "abcba"

const palindrome = ((str) => {
    let reverse = str.split('').reverse().join('');
    return str === reverse;
})

// console.log(palindrome(str))

const res = palindrome(str)

if(res){
    console.log("It is a palindrome")
}else{
    console.log("It is not a palindrome")
}