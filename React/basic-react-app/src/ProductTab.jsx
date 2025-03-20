import Product from "./Product.jsx";

function ProductTab() {
    let options = ["high-tech", "Larger-space", "High-quality-camera"];
    return (
        <>
            <Product title="Laptop" price={100000} features={options} />
            <Product title="Phone" price={30000} />
            <Product title="Watch" price={5000} />
        </>
    );
}

export default ProductTab;
