// Bubbling :-  When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way
// up on other ancestors.

// const grandParentElement = document.getElementById("grandParent");
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");

// childElement.addEventListener("click", (eventObj) => {
//     console.log("child CLicked");
// }, false);

// grandParentElement.addEventListener("click", () => {
//     console.log("grandparent hello");
// }, false);

// parentElement.addEventListener("click", (eventObj) => {
//     console.log("parent clicked !!!");
// }, false);






// ---------------------------------------------------------------

// Capturing :-  Event capturing starts from the top most(window object) and goes down to the target element. It calls all
//  the listeners registered at each level.
// target :::: The current target of the event, where the event is being dispatched from
// target :::: The target of an event is the object to which the event was originally dispatc

// const grandParentElement = document.getElementById("grandParent");
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");



// childElement.addEventListener("click", (event) => {
//     console.log("child clicked!!");

// }
// );

// grandParentElement.addEventListener("click", (event) => {
//     // console.log(eventObj); // target => Null.
//     console.log("grandparent hello");
//     // event.stopPropagation()
// }, true
// );

// parentElement.addEventListener("click", (eventObj) => {
//     // console.log(eventObj); // target => Null.
//     console.log("parent hello parent elem");
// }, true
// );



// ----------------------------------------------------------
// Stopping bubbling :-  event propagation stops when it reaches the element on which the listener is added.
// event.stopPropagation().  we use this


// event.stopImmediatePropagation()
// If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.
// In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
// To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.



// ----------------------------------
// REMOVE EVENT LISTNER :-  removeEventListener
// const buttonElement = document.getElementById("button");

// const callBack = () => {
//     console.log("click me");
// };
// buttonElement.addEventListener("click", callBack);

// // Faking things
// // after 5 seconds remove this Event listner from buttonElement
// // 5000 - milliseconds -> 5sec

// setTimeout(() => {
//     buttonElement.removeEventListener("click", callBack);
// }, 5000);