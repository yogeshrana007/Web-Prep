const mongoose = require("mongoose");
const Chat = require("./models/chat");

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

const allChats = [
    {
        from: "Alice",
        to: "Bob",
        msg: "Hey Bob, how are you?",
        created_at: new Date(),
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "I'm good, thanks!",
        created_at: new Date(),
    },
    {
        from: "Charlie",
        to: "Dave",
        msg: "Can we meet tomorrow?",
        created_at: new Date(),
    },
    {
        from: "Dave",
        to: "Charlie",
        msg: "Sure, let me know the time.",
        created_at: new Date(),
    },
    {
        from: "Emma",
        to: "Frank",
        msg: "Happy Birthday!",
        created_at: new Date(),
    },
    {
        from: "Frank",
        to: "Emma",
        msg: "Thanks! Appreciate it.",
        created_at: new Date(),
    },
    {
        from: "Grace",
        to: "Harry",
        msg: "Please check your messages.",
        created_at: new Date(),
    },
    {
        from: "Harry",
        to: "Grace",
        msg: "Sure, will do.",
        created_at: new Date(),
    },
    {
        from: "Ivy",
        to: "John",
        msg: "Let's start the project today.",
        created_at: new Date(),
    },
    {
        from: "John",
        to: "Ivy",
        msg: "Yes, I'm ready!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
