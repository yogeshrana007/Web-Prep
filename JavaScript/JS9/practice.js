let btn=document.createElement("button");
let inp=document.createElement("input");
// console.log();
let body=document.querySelector("body");

body.prepend(btn);
btn.innerText="click me!!";

body.prepend(inp);

btn.addEventListener("click",function(){
    console.log("Buttton is clicked!!");
})

inp.placeholder="username";
btn.id="btn";

let button=document.querySelector("#btn");
button.style.backgroundColor="grey";
button.style.color="white";

let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.style.textDecoration="underline";
body.prepend(h1);

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";

h1.insertAdjacentElement("afterend",p);
