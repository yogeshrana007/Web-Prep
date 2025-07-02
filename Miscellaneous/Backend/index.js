const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    let { user } = req.query;
    res.send(`Standard GET response, Wlc @${user}`);
});

app.post("/register", (req, res) => {
    let { user, pass } = req.body;
    console.log(req.body);
    res.send(`Std POST response, Wlc @${user}`);
});

app.listen(port, () => {
    console.log(`listening at the port ${port}`);
});
