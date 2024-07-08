// Explain the concept of event bubbling and event capturing in JavaScript. Provide examples to illustrate both.

const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener("click", () => {
    console.log("child CLicked");
}, true);

grandParentElement.addEventListener("click", () => {
    console.log("grandparent hello");
}, false);

parentElement.addEventListener("click", () => {
    console.log("parent clicked !!!");
}, false);



// childElement.addEventListener("click", () => {
//     console.log("child clicked!!");
// });

// grandParentElement.addEventListener("click", () => {
//     console.log("grandparent hello");
// }, true);

// parentElement.addEventListener("click", () => {
//     console.log("parent hello parent elem");
// }, true);



const arr = () => {
    console.log("hello");
}