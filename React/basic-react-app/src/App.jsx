import Activity from "./Activity.jsx";
import "./App.css";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import ProductTab from "./ProductTab.jsx";
function App() {
    return (
        <>
            <Activity username="Yogesh" textColor="pink" />
            <h1>Top deals</h1>
            <ProductTab />
            <Button />
            <Form />
        </>
    );
}
// Update the import statement to match the correct file and function name
export default App;
