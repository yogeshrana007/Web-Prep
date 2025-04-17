const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// for using static files
// app.use(express.static("public")); ---> agar same directory se run kre to
app.use(express.static(path.join(__dirname, "public"))); // iska use krke dusri directory se bhi run kr sktre hai

app.listen(port, () => {
    console.log(`server is started at port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    // let followers = ["alex", "emma", "liam", "zoey"];
    // res.render("insta.ejs", { username, followers });

    const instaData = require("./data.json"); // data.json file hame DB se mili to usko pahle require krna pdega
    const data = instaData[username];

    if (data) {
        res.render("insta.ejs", { data });
    } else {
        res.send("User not found");
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // generally such value are assigned from the data base so we assuming it comes from DB
    res.render("rolldice.ejs", { diceVal });
});
