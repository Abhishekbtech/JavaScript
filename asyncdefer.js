// When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. 
// It must execute the script right now. The same happens for external scripts <script src="..."></script>: 
// the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.
// That leads to two important issues:

// Scripts can’t see DOM elements below them, so they can’t add handlers etc.
// If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:


// defer :-     The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
{/* <p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p> */}


// -------------------------------------------------------------------------


// async :-     The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.
// The async attribute means that a script is completely independent:
// The browser doesn’t block on async scripts (like defer).
// Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
// DOMContentLoaded and async scripts don’t wait for each other:
// DOMContentLoaded may happen both before an async script (if an async script finishes loading after the page is complete)
// …or after an async script (if an async script is short or was in HTTP-cache)

// In other words, async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded.


// -----------------------------------------------------------------------------------


// Dynamic scripts :-   There’s one more important way of adding a script to the page.

// let script = document.createElement('script');
// script.src = "/article/script-async-defer/long.js";
// document.body.append(script); // (*)