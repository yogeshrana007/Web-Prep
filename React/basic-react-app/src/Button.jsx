function handleClick() {
    console.log("Hello");
}
function handleMouseOver() {
    console.log("Hovered");
}
function handleDoubleClick() {
    console.log("Double clicked");
}
export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>click me!</button>
            <button onMouseOver={handleMouseOver}>Hover effect</button>
            <button onDoubleClick={handleDoubleClick}>Double click me!</button>
        </div>
    );
}
