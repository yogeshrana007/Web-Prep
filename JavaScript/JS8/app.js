let arr=[1,2,3,4,5];
let tot=0;
function sum(arr){
    arr.forEach(function(num) {
        tot+=num;
    });
    return tot;
}
// console.log(sum(arr));

let newArr=arr.map(function(el){  //  new Arr bnta hai or condition ke according usme elemet aa jate hai jaise isme el*el (means square) jaa rhe hai
    return el*el;
});
// console.log(newArr);

let evenArr=arr.filter((num)=>(num%2!=0)); // those element satisfy the condition are also present in evenArr
// console.log(evenArr);

let everyArr=arr.every((num)=>(num>=1)); // return true if all gives true else false
// console.log(everyArr);

console.log(arr.some((num)=>(num>3))); // return true if any one gives true

console.log(arr.reduce((acc,ele)=>(acc+ele)));  // reduce the array to a single value means single value return karega

// setting up default parameters
function fuc(a,b=1){ //--> this means agar hum fuc(2) hi bhejenge to b ki default value 1 set ho jayegi but if we pas (2,4) to a=2 , b=4 rhega normal function jaise
    return a+b;
}
console.log(fuc(2));

// Spread
function fuc1(...arr){
    // operations
}
let newArr1=[...arr]; // to ek ek element arr ke newArr me store ho jayenge
console.log(newArr1);

let str="Yogesh Rana";
let chars=[...str];
console.log(chars);

let data={
    email1 : "y@gmail.com",
    pass1 : "Yog",
};
let data2={
    email2 : "S@gmail.com",
    pass2 : "S123",
}
let datacopy={...data, id:123};
// console.log(datacopy);

let combineObj={...data,...data2}; // copy key and values fronn two differnt obj into one
console.log(combineObj);

// if we store arr into obj then key will arr index and values are elements
let Arrobj={...arr};
console.log(Arrobj);

// REST--> Jab input size fix ni hoti tab use krte hai (Bundle the data )
function sumUsingREST(...args){
    return args.reduce((add,el)=>add+el);
}
console.log(sumUsingREST(1,1,2,3,3));


// Destructuring :- Storing values of array into multiple variables

let names=["Yog","Sakshi","Sanju"];
let [winner,runnerup]=names;
console.log(winner,runnerup);

// for objects
let {email1, pass1}=data; // here we have to give same name as written in data
console.log(email1,pass1);

// but if we want to assign diffent name write like below
let {email2: email , pass2: pass}=data2;
console.log(email,pass);


