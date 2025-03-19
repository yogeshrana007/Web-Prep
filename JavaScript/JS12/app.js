// Async function  ---> Promise return krke dega

async function greet() {
    // throw "404 server not found";
    return "hello";
}

greet()
    .then((result) => {
        console.log("result is :", result);
    })
    .catch((err) => {
        console.log("Rejected with error :", err);
    });

let hello = async () => {
    return 5;
}; // return a promise

// Await keyWord--> Pauses the execution of its surrounding async function until the promise is setteled(resolved or rejected)

// jab function async hoga tabhi usme await ko use kar skte hai

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}
async function demo() {
    await getNum(); //---------------> Jab tak iska result complete ni hoga tab tak iske age ka run ni hoga
    getNum();
    getNum();
}

// CHange color using Await
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolved("color changed");
        }, delay);
    });
}

async function demo1() {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    changeColor("pink", 1000);
}

demo1();

// Handling rejection of await----> using try and catch

//-----------------------API-------------------------->(Application program interface)

let url = "https://catfact.ninja/fact?max_length=140";

/*
fetch(url)
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log("data1->", data.fact);
        return fetch(url);
    })
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log("data2->", data.fact);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// Using fetch with async and await

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
    } catch (e) {
        console.log("error -", e); //---------> Try and catch are just for error handling
    }
}

// getFacts();

//

// Using Axios--> Ek library hai (Isme apne ko json me convert krne ki jarurat ni padti)
async function getFactsUsingAxios() {
    try {
        let result = await axios.get(url);
        return result.data.fact;
        // console.log("Using Axios->", result.data.fact);
    } catch (err) {
        console.log("Error (axios)->", err);
    }
}

let btn = document.querySelector("button");
let p = document.querySelector(".fact");

btn.addEventListener("click", async () => {
    let para = await getFactsUsingAxios();
    p.innerText = para;
});

// let p = document.querySelector(".fact");

// // Using Axios--> Ek library hai (Isme apne ko json me convert krne ki jarurat ni padti)
// async function getFactsUsingAxios() {
//     try {
//         let result = await axios.get(url);
//         p.innerText = result.data.fact;
//         console.log("Using Axios->", result.data.fact);
//     } catch (err) {
//         console.log("Error (axios)->", err);
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     getFactsUsingAxios();
// });
