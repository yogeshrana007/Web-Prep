
//------------------- To Do ------------------------->
/*
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dbtn=document.createElement("button");
    dbtn.innerText="delete";
    dbtn.classList.add("delete");

    item.appendChild(dbtn);
    ul.appendChild(item);
    inp.value="";
})

// let deleteb=document.querySelectorAll(".delete");
// for(delb of deleteb){
//     delb.addEventListener("click",function(){
//         let par= this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

*/


/* Simon says game */

let gameSq=[];
let userSq=[];
let btns=["yellow", "red", "purple", "green"];

let started=false;
let level=0;
let highestScore=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});


function levelUp(){
    userSq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)

    gameSq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash")
    },200);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
        btn.classList.remove("userFlash")
    },200);
};

function btnPress(){
    let btn=this; // this refers to the button pressed
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSq.push(userColor);

    checkSeq(userSq.length-1);
}

function checkSeq(idx){

    if(userSq[idx] === gameSq[idx]){
        if(userSq.length == gameSq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerText="Game Over! Press any key to start the game";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        score();
        reset();
    }
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function score(){

    let existingScore=document.querySelector("p");
    if(existingScore){
        existingScore.remove();
    }
    if(highestScore<=level-1){
        highestScore=level-1;
    }
    let score=document.createElement("p");
    score.innerHTML=`Your score is <b>${level-1}</b> <br> Highest score is ${highestScore}`;
    h2.insertAdjacentElement("beforebegin", score);
}

function reset(){
    started=false;
    level=0;
    userSq=[];
    gameSq=[];
}


