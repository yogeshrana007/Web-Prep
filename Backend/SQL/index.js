const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Yogesh@940",
});

/*
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

// inserting 100 user data using faker

for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}


try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}
connection.end();

*/

// Home page
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send(" some error in DB");
    }
});

// Show users
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send(" some error in DB");
    }
});

//Edit route

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send(" some error in DB");
    }
});

//update route in DB
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("WRONG PASSWORD");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send(" some error in DB");
    }
});

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/user", (req, res) => {
    let { id, username, email, password } = req.body;
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        res.send("Some error in DB");
    }
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);

    let q = `DELETE FROM user WHERE id=?`;

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        res.send("Error while deleting");
    }
});
app.listen("8080", (req, res) => {
    console.log("server is listening at port 8080 🚀");
});
