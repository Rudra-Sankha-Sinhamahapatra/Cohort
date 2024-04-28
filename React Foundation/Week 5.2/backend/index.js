require('dotenv').config();
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require('./db');


const app = express();
const port = 3000;
app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg: "Todo Created"
    });
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos
    });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You have given wrong inputs",
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "Todo marked as completed",
    });
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});
