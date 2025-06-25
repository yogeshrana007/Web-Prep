const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

main()
    .then(() => {
        console.log("connection successful!");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// home page where all chats are visible
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// getting form for new msg
app.get("/chats/new", (req, res) => {
    res.render("newMsg.ejs");
});

// posting on route new msg
app.post("/chats/new", (req, res) => {
    let { to, from, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
        .save()
        .then((res) => {
            console.log("Chat was saved");
        })
        .catch((err) => console.log(err));
    res.redirect("/chats");
});

// edit msg
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("editMsg.ejs", { chat });
});

app.patch("/chats/:id", async (req, res) => {
    let { newMsg } = req.body;
    let { id } = req.params;
    try {
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
        res.redirect("/chats");
    } catch (err) {
        let errMsg = err.errors.msg.message;
        res.send(errMsg);
    }
    // console.log(updatedChat);
});

// destroy
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    console.log(id);
    let message = await Chat.findByIdAndDelete(id);
    // console.log(mess);
    res.redirect("/chats");
});
app.listen(8080, () => {
    console.log("server started listening at port 8080");
});
