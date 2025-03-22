// Learning about the Objects in state

import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });
    let updateBlue = () => {
        setMoves((preMoves) => {
            return { ...preMoves, blue: preMoves.blue + 1 };
        });
    };
    let updateRed = () => {
        setMoves((preMoves) => {
            return { ...preMoves, red: preMoves.red + 1 };
        });
    };
    let updateGreen = () => {
        setMoves((preMoves) => {
            return { ...preMoves, green: preMoves.green + 1 };
        });
    };
    let updateYellow = () => {
        setMoves((preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow + 1 };
        });
    };
    /* Agar hum direct moves.blue += 1; setMoves(moves); likhein, to bhi problem aayegi
 * Yeh directly existing object ko mutate karega.
 * React state changes ko shallow compare (===) karta hai. Agar object reference same hai, to  React ko lagega ki koi change nahi hua, aur re-render nahi hoga.
 * 
 * Problem:

  *  moves ka reference same hai, isliye React ko nahi lagega ki state change hui hai.
Component re-render nahi hoga, UI update nahi hoga.
*/

    return (
        <div>
            <p> Blue Moves = {moves.blue} </p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
                +1
            </button>
            <p> Yellow Moves = {moves.yellow}</p>
            <button
                style={{ backgroundColor: "yellow", color: "black" }}
                onClick={updateYellow}
            >
                +1
            </button>
            <p> Red Moves = {moves.red} </p>
            <button style={{ backgroundColor: "red" }} onClick={updateRed}>
                +1
            </button>
            <p> Green Moves = {moves.green}</p>
            <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
                +1
            </button>
        </div>
    );
}
