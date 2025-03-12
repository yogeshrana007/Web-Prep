// Selecting Elements

// 1. By ID
let mainImg = document.getElementById("mainImg");
console.log(mainImg); // Displays the selected element
mainImg.src = "assets/creation_1.png"; // Changing the image using ID

// 2. By Class Name
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    console.log(smallImages[i].src); // Displaying each image's source
    smallImages[i].src = "assets/spiderman_img.png"; // Changing images using class
}

// 3. By Tag Name
let paragraphs = document.getElementsByTagName("p");
console.log("Total paragraphs:", paragraphs.length);



// ------------------ Query Selector -------------------

// Single Selection
let h2 = document.querySelector("h2");
console.log(h2.innerText); // Displays the first h2 text

let byId = document.querySelector("#mainImg");
console.log(byId); // Selecting by ID via querySelector

let byClass = document.querySelector(".boxLink");
console.log(byClass); // Selecting by class via querySelector

// Selecting Multiple Elements
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}:`, p.innerText);
});



// ------------------ Properties and Methods -------------------

// innerText --> Shows visible text only
console.log(mainImg.innerText); // Empty because img tag has no text
h2.innerText = "The Amazing Spider-Man"; // Changing h2 text

// textContent --> Shows all text (even hidden ones)
console.log(h2.textContent);

// innerHTML --> Shows HTML inside an element
let box = document.querySelector(".box");
console.log(box.innerHTML);



// ------------------ Manipulating Attributes -------------------

// getAttribute --> Get an attribute value
console.log(mainImg.getAttribute("src"));

// setAttribute --> Set/change an attribute
mainImg.setAttribute("alt", "Spider-Man Image");



// ------------------ Using classList -------------------

// Adding a new class
h2.classList.add("highlight");

// Removing a class
h2.classList.remove("highlight");

// Checking if a class exists
console.log(h2.classList.contains("highlight")); // false

// Toggling a class (add if not present, remove if present)
h2.classList.toggle("highlight"); // Adds 'highlight'
h2.classList.toggle("highlight"); // Removes 'highlight'



// ------------------ Adding Elements -------------------

// appendChild() --> Adds at the end (for elements)
let newElement = document.createElement("p");
newElement.innerText = "Spider-Man is Marvel's iconic superhero.";
document.body.appendChild(newElement);

// append() --> Can add text or elements
let newText = document.createElement("span");
newText.innerText = "Friendly Neighborhood Spider-Man";
document.body.append(newText);

// prepend() --> Adds at the start
document.body.prepend(newText);

// insertAdjacentHTML --> Adds HTML at specified positions
h2.insertAdjacentHTML("afterend", "<p><b>Spider-Man's Origin:</b> Bitten by a radioactive spider.</p>");




//mini project ke andar smjhaya gya----->
//=========== Event Bubbling (Means jab b hum kisi nested  element ke eventlistner ko trigger karte hai wo uske parents ko bhi trigger karta hai )

// prevent the event bubbling we use event.stopPropagation inside the code:
let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});
for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}