// The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

// DOM Manipulation     (SELECTORS (get the element) 

// write(“string”): Writes the given string on the document.
// getElementsByName(): returns all the elements having the given name value.

// Selecting with id
let myHeading = document.getElementById("myHeading");
console.log("Selecting with id ", myHeading);

// Selecting with class
let myClass = document.getElementsByClassName("myClass");
console.log("Selecting with class ", myClass);

// Selecting with tag
let allH3s = document.getElementsByTagName("h3");
console.log("Selecting with tag ", allH3s);

// Query Selector
let firstPara = document.querySelector("h3");
console.log("Query Selector ", firstPara);

// Query SelectorAll
let allPs = document.querySelectorAll("h3");
console.log("Query Selector All ", allPs);


/*

    There are 6 main methods to search for nodes in DOM:

    Method	                    Searches by...	    Can call on an element?	            Live?
    querySelector	            CSS-selector	        ✔	                            -
    querySelectorAll	        CSS-selector	        ✔	                           -
    getElementById	            id	                    	                            -
    getElementsByName	        name	                -	                            ✔
    getElementsByTagName	    tag or '*'	            ✔	                            ✔
    getElementsByClassName  	class	                ✔	                            ✔
    
    By far the most used are querySelector and querySelectorAll, but getElement(s)By* can be sporadically helpful or found 
    in the old scripts.

    Besides that:

    There is elem.matches(css) to check if elem matches the given CSS selector.
    There is elem.closest(css) to look for the nearest ancestor that matches the given CSS-selector. The elem itself 
    is also checked.
    And let’s mention one more method here to check for the child-parent relationship, as it’s sometimes useful:

    elemA.contains(elemB) returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.

*/


/*

    Each DOM node belongs to a certain class. The classes form a hierarchy. The full set of properties and methods come as 
    the result of inheritance.

    Main DOM node properties are:

    nodeType
    We can use it to see if a node is a text or an element node. It has a numeric value: 1 for elements,3 for text nodes, 
    and a few others for other node types. Read-only.

    nodeName/tagName
    For elements, tag name (uppercased unless XML-mode). For non-element nodes nodeName describes what it is. Read-only.

    innerHTML
    The HTML content of the element. Can be modified.

    outerHTML
    The full HTML of the element. A write operation into elem.outerHTML does not touch elem itself. Instead it gets 
    replaced with the new HTML in the outer context.

    nodeValue/data
    The content of a non-element node (text, comment). These two are almost the same, usually we use data. Can be modified.

    textContent
    The text inside the element: HTML minus all <tags>. Writing into it puts the text inside the element, with all special 
    characters and tags treated exactly as text. Can safely insert user-generated text and protect from unwanted HTML 
    insertions.

    hidden
    When set to true, does the same as CSS display:none.

    DOM nodes also have other properties depending on their class. For instance, <input> elements (HTMLInputElement) 
    support value, type, while <a> elements (HTMLAnchorElement) support href etc. Most standard HTML attributes have 
    a corresponding DOM property.

*/


// Properties

/*

    Attributes – is what’s written in HTML.
    Properties – is what’s in DOM objects.

    A small comparison:

    Properties	    Attributes
    Type	        Any value, standard properties have types described in the spec	A string
    Name	        Name is case-sensitive	Name is not case-sensitive
    Value	        Standard values can be any type

    Methods to work with attributes are:

    elem.hasAttribute(name) –   to check for existence.
    elem.getAttribute(name) –   to get the value.
    elem.setAttribute(name, value) –    to set the value.
    elem.removeAttribute(name) –    to remove the attribute.
    elem.attributes     is a collection of all attributes.

*/


/*

    Methods to create new nodes:

    document.createElement(tag) – creates an element with the given tag,
    document.createTextNode(value) – creates a text node (rarely used),
    elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.


    Insertion and removal:

    node.append(...nodes or strings) – insert into node, at the end,
    node.prepend(...nodes or strings) – insert into node, at the beginning,
    node.before(...nodes or strings) –- insert right before node,
    node.after(...nodes or strings) –- insert right after node,
    node.replaceWith(...nodes or strings) –- replace node.
    node.remove() –- remove the node.
    Text strings are inserted “as text”.

    There are also “old school” methods:

    parent.appendChild(node)
    parent.insertBefore(node, nextSibling)
    parent.removeChild(node)
    parent.replaceChild(newElem, node)
    All these methods return node.

    Given some HTML in html, elem.insertAdjacentHTML(where, html) inserts it depending on the value of where:

    "beforebegin" – insert html right before elem,
    "afterbegin" – insert html into elem, at the beginning,
    "beforeend" – insert html into elem, at the end,
    "afterend" – insert html right after elem.

    Also there are similar methods, elem.insertAdjacentText and elem.insertAdjacentElement, that insert text strings 
    and elements, but they are rarely used.

    To append HTML to the page before it has finished loading:

    document.write(html)

*/


/*

    To manage classes, there are two DOM properties:

    className – the string value, good to manage the whole set of classes.
    classList – the object with methods add/remove/toggle/contains, good for individual classes.
        elem.classList.add/remove("class") – adds/removes the class.
        elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
        elem.classList.contains("class") – checks for the given class, returns true/false.

    To change the styles:

    The style property is an object with camelCased styles. Reading and writing to it has the same meaning as modifying 
    individual properties in the "style" attribute. To see how to apply important and other rare stuff – there’s a list 
    of methods at MDN.

    The style.cssText property corresponds to the whole "style" attribute, the full string of styles.

    To read the resolved styles (with respect to all classes, after all CSS is applied and final values are calculated):

    The getComputedStyle(elem, [pseudo]) returns the style-like object with them. Read-only.

*/


// tagName : returns tag for element nodes
console.log("tagName ", myHeading.tagName);

// innerText : returns the text content of the element and all its children
console.log("innerText ", myHeading.innerText);

// innerHTML : returns the plain text or HTML contents in the element
// myHeading.innerHTML = "<strong>Abhishek</strong>";
// console.log("innerHTML ", myHeading.innerHTML);
// let body = document.body;
// body.append(myHeading);

// textContent : returns textual content even for hidden elements
myHeading.innerText = "<strong>Hello World</strong>";
console.log("textContent ", myHeading.textContent);


//to get the attribute value
console.log("Get Attribute Value ", myHeading.getAttribute("id"));

//to set the attribute value
console.log("Set Attribute value ", myHeading.setAttribute("class", "newClass"));

// Style
console.log("Style ", myHeading.style.color = "red");
console.log("Style ", myHeading.style.backgroundColor = "green");


// Insert Elements 
// 1. "beforebegin" – insert html immediately before elem,
// 2. "afterbegin" – insert html into elem, at the beginning,
// 3. "beforeend" – insert html into elem, at the end,
// 4. "afterend" – insert html immediately after elem.

// starting
let para1 = document.createElement('p');
para1.innerText = "Hello abhi";
let abhi = document.body;
abhi.prepend(para1);

// at end
let para2 = document.createElement('p');
para2.innerText = "Hello chau";
let chau = document.body;
chau.append(para2);

//adds before the node (outside)
let para3 = document.createElement('h2');
para3.innerText = "I am heading";
let pos = document.querySelectorAll('h3')[1];
pos.before(para3);

//adds after the node (outside)
let para4 = document.createElement('div');
para4.innerText = 'I am div';
let place = document.querySelectorAll('h3')[0];
place.after(para4);

// appendChild() method appends a node (element) as the last child of an element.
let ul = document.createElement('h2');
ul.innerText = "yes";
let aa = document.querySelector("div");
aa.appendChild(ul);

// remove
let rem = document.querySelector("H2");
rem.remove();



// Fragments 
let frag = document.createDocumentFragment();
let li1 = document.createElement('li');
li1.innerText = 'one';
frag.appendChild(li1);
let li2 = document.createElement('li');
li2.innerText = 'two';
frag.appendChild(li2);

document.getElementById('myList').appendChild(frag);





// CSS 

/*
    Element size and scrolling

    offsetParent – is the nearest positioned ancestor or td, th, table, body.
    offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
    offsetWidth/offsetHeight – “outer” width/height of an element including borders.
    clientLeft/clientTop – the distances from the upper-left outer corner to the upper-left inner (content + padding) corner. For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.
    clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
    scrollWidth/scrollHeight – the width/height of the content, just like clientWidth/clientHeight, but also include scrolled-out, invisible part of the element.
    scrollLeft/scrollTop – width/height of the scrolled out upper part of the element, starting from its upper-left corner.
    
    All properties are read-only except scrollLeft/scrollTop that make the browser scroll the element if changed.

*/


/*
    Window sizes and scrolling

    Geometry:

    Width/height of the visible part of the document (content area width/height): 
    document.documentElement.clientWidth/clientHeight

    Width/height of the whole document, with the scrolled out part:

    let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );

    Scrolling:

    Read the current scroll: window.pageYOffset/pageXOffset.

    Change the current scroll:

    window.scrollTo(pageX,pageY) – absolute coordinates,
    window.scrollBy(x,y) – scroll relative the current place,
    elem.scrollIntoView(top) – scroll to make elem visible (align with the top/bottom of the window).
*/