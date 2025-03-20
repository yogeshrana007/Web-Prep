import "./Product.css";

function Product({ title, price = 50, features = [] }) {
    // Here price=50 means we are giving default value of price if none is assign the price=50.

    let styles = {
        backgroundColor: price > 30000 ? "lightgreen" : "lightblue",
    };
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price is {price} </h5>
            {features.map((feature) => (
                <p>
                    <li>{feature}</li>
                </p>
            ))}
            {price > 30000 && <p>Discount of 5%</p>}
        </div>
    );
}

export default Product;
