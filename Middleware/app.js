const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.use((req, res, next) => {
    // console.log(req);
    next();
});
app.get("/", (req, res) => {
    res.send("ddddd");
});

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "ACCESS") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!!!");
});

app.get("/api", (req, res) => {
    res.send("DATA!!");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "ACCESS TO ADMIN IS FORBIDDEN");
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});

// app.use((req, res) => {
//     res.status(404).send("Page Not Found");
// });

app.listen(8080, () => {
    console.log("server listening at port 8080");
});
