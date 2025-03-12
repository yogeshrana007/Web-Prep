/* Q--1 */
let btn=document.createElement("button");
let body=document.querySelector("body");

btn.innerText="Click here !!";
body.prepend(btn);
window.addEventListener("scroll",function(){
    console.log("scrolled");
})
body.addEventListener("keypress",function(){
    console.log("key Is pressed");
})

body.addEventListener("mouseout",function(){
    console.log("Mouse is out of the button");
})

window.addEventListener("load",function(){
    console.log("the page is fully Loaded");
})

let p=document.createElement("p");
p.innerHTML="hi lorem*100b The scroll event fires when the document view has been scrolled. To detect when scrolling has completed, see the scrollend event of Document.".repeat(100); 
// p.innerHTML="The scroll event fires when the document view has been scrolled. To detect when scrolling has completed, see the scrollend event of Document. For element scrolling, see scroll event of Element.";
body.append(p);


// Q---->2
btn.addEventListener("click", function(){
    btn.style.backgroundColor="green";
})


// Q--3

let inp=document.createElement("input");
inp.placeholder="enter your name";
inp.type="le";

let h2=document.createElement("h2");
h2.innerText="";

btn.insertAdjacentElement("beforebegin",inp);
inp.insertAdjacentElement("beforebegin",h2);

// document.body.prepend(inp);

inp.addEventListener("input", function(){
    h2.innerText=inp.value.replace(/[^A-Za-z ]/g, "");
})