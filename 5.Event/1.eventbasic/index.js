// Event :- An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

/*
    Mouse events:

    click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
    dblclick – when the user double-clicks on an element.
    contextmenu – when the mouse right-clicks on an element.
    mouseover / mouseout – when the mouse cursor comes over / leaves an element.
    mousedown / mouseup – when the mouse button is pressed / released over an element.
    mousemove – when the mouse is moved.
*/

/*
    Keyboard events:

    keydown and keyup – when a keyboard key is pressed and released.
    keypress – when a keyboard key is typed (useful for non-Latin characters or special
    keys like Enter, Arrow Down etc.). The event object will contain a charCode property
*/

/*
    Form element events:

    submit – when the visitor submits a <form>.
    focus – when the visitor focuses on an element, e.g. on an <input>.
*/

/*
    Document events:

    DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.
*/

/*
    CSS events:

    transitionend – when a CSS-animation finishes.
*/


// Event handlers :-    To react on events we can assign a handler – a function that runs in case of an event.

// 1. HTML-attribute :-    A handler can be set in HTML with an attribute named on<event>.
//  <button id="button1" onclick="btn1()">Click me1</button>
function btn1() {
    let buttonElement = document.getElementById("heading");
    buttonElement.style.color = "red";
}


// 2. DOM property :-   We can assign a handler using a DOM property on<event>.
button2.onclick = function () {
    let buttonElement = document.getElementById("heading");
    buttonElement.style.color = "blue";
};


// 3. addEventListener :-   The fundamental problem of the aforementioned ways to assign handlers is that we can’t assign multiple handlers to one event.
let btn3 = document.querySelector("#button3");
btn3.addEventListener('click', () => {
    let buttonElement = document.getElementById("heading");
    buttonElement.style.color = "green";
})

// removeEventListener to remove.

// // Event object :-  To properly handle an event we’d want to know more about what’s happened. Not just a “click” or 
// a “keydown”, but what were the pointer coordinates? Which key was pressed? And so on.
// Event Objects : - An event object contains information about the event that occurred.
//                 It’s passed as the first argument to every event handler.

// event.target – the element that fired the event.
// event.currentTarget – the element where the listener is attached.
// event.type - TYPE OF EVENT (click, mouseenter).

let btn2 = document.getElementById('button2')
btn2.addEventListener('mouseover', (event) => {
    console.log(event)
    console.log(event.target.value); // The element firing the event.
})


// ----------------------------------
// REMOVE EVENT LISTNER :-  removeEventListener
const buttonElement = document.getElementById("button");

const callBack = () => {
    console.log("click me");
};
buttonElement.addEventListener("click", callBack);

// Faking things
// after 5 seconds remove this Event listner from buttonElement
// 5000 - milliseconds -> 5sec

setTimeout(() => {
    buttonElement.removeEventListener("click", callBack);
}, 5000);


// ------------------------------------------
// Browser default actions

// There are two ways to tell the browser we don’t want it to act:

// The main way is to use the event object. There’s a method event.preventDefault().
// If the handler is assigned using on<event> (not by addEventListener), then returning false also works the same.