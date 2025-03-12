// Dom Events

// onclick event - triggers when the element is clicked
document.getElementById("mainImg").onclick = function() {
    alert("Main image clicked!");
};

// onmouseover event - triggers when mouse hovers over the element
document.getElementById("mainImg").onmouseover = function() {
    console.log("Mouse is over the main image");
};

// Event Listener - preferred modern way for adding events
document.getElementById("mainImg").addEventListener("click", function() {
    console.log("Clicked using addEventListener");
});

// 'this' in event listener - refers to the element that triggered the event
document.getElementById("mainImg").addEventListener("click", function() {
    console.log(this.id + " was clicked");
});

// Keyboard events - useful for handling keypresses
document.addEventListener("keydown", function(event) {
    console.log("Key down: ", event.key); // triggers when a key is pressed
});

document.addEventListener("keyup", function(event) {
    console.log("Key up: ", event.key); // triggers when a key is released
});

// Extracting form data - important for handling form submissions
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally
    const formData = new FormData(this); // Collects all form data
    console.log("Form Data:", Object.fromEntries(formData.entries())); // Displays data as object
});

// Change event - triggers when the value of an input element changes
document.getElementById("myInput").addEventListener("change", function() {
    console.log("Input changed to: ", this.value);
});

// Input event - fires whenever the value in the input element is modified
document.getElementById("myInput").addEventListener("input", function() {
    console.log("Current input value: ", this.value);
});
