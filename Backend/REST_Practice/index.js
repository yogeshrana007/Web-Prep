const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const port = 8080;
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("server listening at port 8080");
});

app.get("/feed", (req, res) => {
    res.render("index.ejs");
});

let posts = [
    {
        id: uuidv4(),
        username: "y_rana",
        content: "I love coding!!",
    },
    {
        id: uuidv4(),
        username: "radhe",
        content: "I love to talk with girls!!",
    },
    {
        id: uuidv4(),
        username: "harshu",
        content:
            "I love to watch cricket because the cameraman always shows to girls :) !!",
    },
];

let accountInfo = [
    {
        username: "Yogesh",
        password: "1234",
    },
];

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

app.post("/signup", (req, res) => {
    let { username, password } = req.body;
    console.log(accountInfo);
    accountInfo.push({ username, password });
    console.log(accountInfo);
    res.redirect("/login");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Find a user in the accountInfo array who matches both username & password
    const foundUser = accountInfo.find(
        (user) => user.username === username && user.password === password
    );

    if (foundUser) {
        res.render("index.ejs", { posts });
    } else {
        res.send("User not found");
    }
});
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
