import Price from "./Price.jsx";
import "./Product.css";

function Product({ title, idx }) {
    let oldPrice = [12000, 10000, 50000, 20000];
    let newPrice = [9999, 8999, 45999, 18999];
    let description = [
        ["8,000 DPI sensor", "wireless"],
        ["intuitive touch surface", "wireless"],
        ["designed for iPad Pro", "wireless"],
        ["wireless mouse", "wireless"],
    ];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;
