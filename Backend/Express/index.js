const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(` app is listening ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home");
});
app.get("/apple", (req, res) => {
    res.send("Apple");
});

app.use((req, res) => {
    res.send("Wrong req");
});
