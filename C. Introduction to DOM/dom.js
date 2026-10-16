
/*
1. WHY DO WE NEED DOM?
==================================================

HTML elements are written in HTML, but to manipulate
them using JavaScript, we need to access them through
JavaScript objects.

The browser represents HTML elements as JavaScript
objects, allowing us to change their content, styles,
attributes, and other properties.
*/


// Example:
const temp = document.getElementById("first");
console.log(temp);



// Manipulation:
temp.textContent = "semester exam is on 16 november";

/*
textContent changes the text content of the selected
element.

It replaces the existing content, including child
elements, with the new text.

It also includes text inside hidden child elements
when reading the existing content.







2. GLOBAL WINDOW OBJECT
==================================================

The window object is the global object provided by
the browser. It gives JavaScript access to browser
features such as the DOM, timers, alerts, and more.







3. SELECTING ELEMENTS BY ID
==================================================

Syntax:
document.getElementById("id");

It selects the HTML element whose id matches the
specified value and returns that element as a
JavaScript object.
*/


// Example:

const temp2 = document.getElementById("second");
console.log(temp2);

/*
4. SELECTING ELEMENTS BY TAG NAME
==================================================

Syntax:
document.getElementsByTagName("tagName");

It selects all HTML elements having the specified
tag name and returns an HTMLCollection.

An HTMLCollection looks similar to an array, but
it is not an actual array.

It is a live collection, meaning it automatically
updates when matching elements are added or removed.
*/


// Example:
const temp3 = document.getElementsByTagName("li");
console.log(temp3);



/*
5. SELECTING ELEMENTS BY CLASS NAME
==================================================

Syntax:
document.getElementsByClassName("className");

It selects all HTML elements having the specified
class name and returns an HTMLCollection.

An HTMLCollection looks similar to an array, but
it is not an actual array.

It is a live collection, meaning it automatically
updates when matching elements are added or removed.
*/


// Example:
const temp4 = document.getElementsByClassName("third");
console.log(temp4);



/*
6. SELECTING ELEMENTS USING QUERY SELECTOR
==================================================

Syntax:
document.querySelector("CSS selector");

querySelector() is a built-in DOM method that
selects and returns the first element matching
the specified CSS selector.

Examples:

"h2"       -> Selects the first <h2> element.

"#first"   -> Selects the element with id="first".

".third"   -> Selects the first element with
              class="third".

If no matching element is found, it returns null.
*/

// Examples:
document.querySelector("h2");
document.querySelector("#first");
document.querySelector(".third");

