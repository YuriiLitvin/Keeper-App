const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/noteDB");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);




app.get("/api", (req, res) => {
    Note.find({}, (err, notes) => {
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
    const note = new Note({
        title: postedNote.title,
        content: postedNote.content
    });

    note.save();
});

app.delete("/api", (req, res) => {
    const id = req.body.itemId;
    Note.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Item deleted");
            res.setHeader("Content-Type", "application/json");
            res.send({ "message": "Item removed" });
        }
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});