// 1. DOMContentLoaded :– the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.

const containerElement = document.getElementById("container");
console.log(containerElement, "containerElement - 1");

window.addEventListener("DOMContentLoaded", () => {
    const containerElement = document.getElementById("container");
    console.log(containerElement, "containerElement - 2");
});


// 2. load :– not only HTML is loaded, but also all the external resources: images, styles etc.
// 3. beforeunload event :– the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.
// 4. unload :– the user almost left, but we still can initiate some operations, such as sending out statistics.


// ---------------------------------------------------------------

// Built-in browser autofill
/*
Firefox, Chrome and Opera autofill forms on DOMContentLoaded.

For instance, if the page has a form with login and password, and the browser remembered the values, 
then on DOMContentLoaded it may try to autofill them (if approved by the user).

So if DOMContentLoaded is postponed by long-loading scripts, then autofill also awaits. You probably saw that on some sites (if you use browser autofill) – 
the login/password fields don’t get autofilled immediately, but there’s a delay till the page fully loads. That’s actually the delay until the DOMContentLoaded event.
*/

// 1. window.onload :-   The load event on the window object triggers when the whole page is loaded including styles, images and other resources. 
// This event is available via the onload property.

{/* <script>
  window.onload = function() { // can also use window.addEventListener('load', (event) => {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script> */}

{/* <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0"></img> */ }


// 2. window.onunload :-    When a visitor leaves the page, the unload event triggers on window. We can do something there that doesn’t involve a delay, like closing related popup windows.


// 3. window.onbeforeunload :-  If a visitor initiated navigation away from the page or tries to close the window, the beforeunload handler asks for additional confirmation.

// 4. readyState
// What happens if we set the DOMContentLoaded handler after the document is loaded?
// Naturally, it never runs.
// There are cases when we are not sure whether the document is ready or not. We’d like our function to execute when the DOM is loaded, be it now or later.
// The document.readyState property tells us about the current loading state.
// There are 3 possible values:
// "loading" – the document is loading.
// "interactive" – the document was fully read.
// "complete" – the document was fully read and all resources (like images) are loaded too.
// So we can check document.readyState and setup a handler or execute the code immediately if it’s ready.