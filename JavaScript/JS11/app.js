// callback hell--->Callback nesting

h1 = document.querySelector("h1");

/*
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("Violet", 1000, () => {
    changeColor("indigo", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("yellow", 1000, () => {
                    changeColor("orange", 1000, () => {
                        changeColor("red", 1000);
                    });
                });
            });
        });
    });
});
*/

// for overcome from this callback hell we use promises

function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success : Data is saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

// then and catch()

/*
let request = saveToDB("Yogii");
request
  .then((data) => {
    console.log("Then");
    console.log(data);
  })

  .catch((error) => {
    console.log("catch");
    console.log(error);
  });
*/
// Promise chaining

saveToDB("Yogii")
    .then((data) => {
        console.log("data 1, saved");
        return saveToDB("Rana");
    })
    .then(() => {
        console.log("data 2, saved");
    })

    .catch((error) => {
        console.log("fail");
    });

// doing color change using Promises

function changeColor(color, delay) {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolved("color changed");
        }, delay);
    });
}

changeColor("violet", 1000)
    .then(() => {
        console.log("violet");
        return changeColor("indigo", 1000);
    })
    .then(() => {
        console.log("indigo");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green");
        return changeColor("yellow", 1000);
    })
    .then(() => {
        console.log("yellow");
        return changeColor("red", 1000);
    })
    .then(() => {
        console.log("red");
        // return changeColor("",1000)
    })
    .catch(() => {
        console.log("Failure");
    });
