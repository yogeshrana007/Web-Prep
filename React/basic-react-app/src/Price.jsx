export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecoration: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "lightblue",
        height: "31px",
        // width: "220px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
