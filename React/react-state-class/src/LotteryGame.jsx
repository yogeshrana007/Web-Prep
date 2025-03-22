import { useState } from "react";

function genRandomNum(n) {
    let arr = new Array(n);
    for (let i = 0; i < 3; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}
function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export default function LotteryGame() {
    let [ticket, setTicket] = useState(genRandomNum(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genRandomNum(3));
    };
    return (
        <div>
            <h1>Lottery</h1>
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congrats you won!!"}</h3>
        </div>
    );
}

// Here we made all components in one file. Generally, we shouldn't do this. Instead, we should create separate files for each component.
