const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/taskDB");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Task = mongoose.model("Task", noteSchema);




app.get("/api", (req, res) => {
    Task.find({}, (err, notes) => {
        if (err) {
            console.log(err);
        } else {
            res.setHeader("Content-Type", "application/json");
            res.send(notes);
        }
    });
});

app.post("/api", (req, res) => {
    const postedNote = req.body;
    const task = new Task({
        title: postedNote.title,
        content: postedNote.content
    });

    task.save();
});

app.delete("/api", (req, res) => {
    const id = req.body.itemId;
    // console.log(noteToDelete.itemId);
    Task.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Item deleted");
        }
    });
});





const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});