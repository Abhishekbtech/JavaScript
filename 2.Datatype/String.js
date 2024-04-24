// String Methods
/*
    There are other, less common special characters:
    Character	    Description
    \n	            New line
    \r	            In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
    \', \", \`	    Quotes
    \\	            Backslash
    \t	            Tab
    \b, \f, \v	    Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).
*/


let str = "Abhishek Chauhan";

// length :- The length property returns the length of a string
console.log("length", str.length);


// charAt() :-  The charAt() method returns the character at a specified index (position) in a string
console.log("charat", str.charAt(3));


// charCodeAt() :-  The charCodeAt() method returns the code of the character at a specified index in a string
console.log("charCodeAt", str.charCodeAt(0));


// [ ] :-   Now you can use myString.at(-2) instead of charAt(myString.length-2).
console.log("[ ] or at( )", str[1], str.at(1));


// slice() :-   extracts a part of a string and returns the extracted part in a new string.
console.log("slice", str.slice(1, 6));

// substring() :-   substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
console.log("substring", str.substring(1, 6));

// substr() :-  substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
console.log("substr", str.substr(1, 6));


// toUpperCase() :- A string is converted to upper case with toUpperCase():
console.log("toUpperCase", str.toUpperCase());

// toLowerCase() :- A string is converted to lower case with toLowerCase():
console.log("toLowerCase", str.toLowerCase());


// concat() :-  joins two or more strings: we can use +
var x = "Hello ";
var y = "World!";
console.log("concat", x.concat(y));


// trim() :- method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
console.log("trim", text1.trim());

// trimStart() :- The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log("trimStart", text1.trimStart());

// trimEnd() :- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log("trimEnd", text1.trimEnd());


// padStart() :- The padStart() method pads a string from the start.
console.log("padStart", 'abc'.padStart(8, '0'));

// padEnd() :- method pads a string from the end.
console.log("padEnd", 'abc'.padEnd(4, '0'));


// repeat() :- method returns a string with a number of copies of a string.
console.log('repeat', 'hello'.repeat(3));


// replace() :- method replaces a specified value with another value in a string, method replaces only the first match
console.log("replace", str.replace("Abhishek", "Abhi"));

// ReplaceAll() :- 


// split() :- A string can be converted to an array with the split() method
console.log("split", str.split(","));



// indexOf() :- The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
console.log("indexof", text.indexOf("locate"));

// lastIndexOf() :- The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log("lastindexof", text.lastIndexOf("locate"));


// search() :-  The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log("search", text.search("locate"));

// match() :-   method returns an array containing the results of matching a string against a string (or a regular expression).
let text2 = "The rain in SPAIN stays mainly in the plain";
console.log("match", text2.match("ain"));

// matchAll() :- method returns an iterator containing the results of matching a string against a string (or a regular expression).
console.log("matchAll", text2.matchAll("ain"));

// includes() :- method returns true if a string contains a specified value.
console.log("includes", text2.includes("SPAIN"));

// startsWith() :-  method returns true if a string begins with a specified value.
console.log("startswith", text2.startsWith("The"));

// endsWith() :-    method returns true if a string ends with a specified value.
console.log("endswith", text2.endsWith("plain"));