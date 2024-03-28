/*
    alert
        shows a message.
    prompt
        shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
    confirm
        shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
*/


// alert :-    This class is used to create and display an alert message on the screen.

// alert("Hello");


// prompt :-    It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

/*
    result = prompt(title, [default]);
    title
        The text to show the visitor.
    default
        An optional second parameter, the initial value for the input field.
*/

// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); 


// confirm :-   The function confirm shows a modal window with a question and two buttons: OK and Cancel. 
// The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss?");
alert(isBoss);