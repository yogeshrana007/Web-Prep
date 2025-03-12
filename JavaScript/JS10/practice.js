/* Q--1: EVENT LISTENERS AND ELEMENT CREATION */

// Creating a button dynamically
let btn = document.createElement("button");
let body = document.querySelector("body");

btn.innerText = "Click here !!"; // Adding text to the button
body.prepend(btn); // Adding the button at the top of the body

// Scroll event - Logs a message whenever the user scrolls the page
window.addEventListener("scroll", function () {
    console.log("scrolled");
});

// Keypress event - Logs a message when any key is pressed
body.addEventListener("keypress", function () {
    console.log("Key is pressed");
});

// Mouseout event - Logs a message when the mouse leaves the body
body.addEventListener("mouseout", function () {
    console.log("Mouse is out of the button");
});

// Load event - Logs a message when the page fully loads
window.addEventListener("load", function () {
    console.log("The page is fully loaded");
});

// Creating a paragraph dynamically with sample text for scrolling demonstration
let p = document.createElement("p");
p.innerHTML = "hi lorem*100b The scroll event fires when the document view has been scrolled.".repeat(100);
body.append(p); // Appending the paragraph to the body for scroll effect


/* Q--2: BUTTON COLOR CHANGE ON CLICK */

// Changes the button's background color to green when clicked
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});


/* Q--3: INPUT VALIDATION AND DISPLAY */

// Creating an input element for name entry
let inp = document.createElement("input");
inp.placeholder = "Enter your name"; // Placeholder text for guidance
inp.type = "text"; // Corrected input type to 'text' for proper name entry

// Creating an H2 element for displaying the user's input
let h2 = document.createElement("h2");
h2.innerText = ""; // Initial empty heading

// Inserting input and heading in the correct order
btn.insertAdjacentElement("beforebegin", inp);
inp.insertAdjacentElement("beforebegin", h2);

// Input event - Displays only letters (A-Z, a-z) and spaces in the heading
inp.addEventListener("input", function () {
    h2.innerText = inp.value.replace(/[^A-Za-z ]/g, "");
});
