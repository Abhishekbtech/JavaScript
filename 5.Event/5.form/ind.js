// Form properties and methods

const formElement = document.getElementById("form");
console.log(formElement);


// 1. Navigation: form and elements  :- Document forms are members of the special collection document.forms.
// That’s a so-called “named collection”: it’s both named and ordered. We can use both the name or the number in the document to get the form.

formElement.addEventListener("submit", (event) => {
    event.preventDefault();   // this line of code prevents the Default
    const formElem = event.target; // form Element
    console.dir(formElem)

    const elements = formElem.elements; // {elementName: #element}
    console.dir(elements);

    // Elements
    const nameElement = elements.name;
    const emailElement = elements.email;
    const standardElement = elements.standard;

    // values
    const name = nameElement.value;
    const email = emailElement.value;
    const standard = standardElement.value;

    const payload = {
        name: name,
        email: email,
        standard: standard,
    };

    console.log(payload)
})



// Focusing: focus/blur :-   An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard. 
// There’s also an autofocus HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus.

// The blur handler checks if the field has an email entered, and if not – shows an error.
// The focus handler hides the error message (on blur it will be checked again):

// They do not bubble. Can use capturing state instead or focusin/focusout.
// Most elements do not support focus by default. Use tabindex to make anything focusable.



const emailElement = document.getElementById("email");
emailElement.addEventListener('blur', () => {
    if (!emailElement.value.includes('@')) { // not email
        alert('Please enter a correct email.')
    }
})


// ---------------------------------------------------------


// Events: change, input, cut, copy, paste

// change :-    The change event triggers when the element has finished changing.

// const nameElement = document.getElementById("name");
// nameElement.addEventListener('change', (e) => {
//     console.log(e.target.value);
//     e.target.value = e.target.value.toUpperCase();
// })


// input :-    The input event is triggered each time the user inputs a character.  
//            It can also trigger if the value of an <input> or <textarea>

const nameElement = document.getElementById("name");
nameElement.addEventListener('input', (e) => {
    console.log(e.target.value);
    e.target.value = e.target.value.toUpperCase();
})