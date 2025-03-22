// Learning use of state in React using functional components and hooks like useState by incrementing the count on button click.

import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1);
        // console.log(count);
    };
    return (
        <div>
            {/* <h3>Count = {count} </h3> */}
            <button onClick={incCount}>Count = {count}</button>
        </div>
    );
}
