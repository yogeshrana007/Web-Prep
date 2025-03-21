function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write here!!"></input>
            <button /*onClick={handleFormSubmit}*/>Submit</button>
        </form>
    );
}
