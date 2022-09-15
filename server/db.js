const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/noteDB");
}

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

async function getAll() {
    const notes = await Note.find();
    return notes;
}

async function addItem(note) {
    const newNote = new Note({
        title: note.title,
        content: note.content
    });

    await newNote.save();
}

async function deleteItem(itemId) {
    await Note.deleteOne({ id: itemId });
}

exports.getAll = getAll;
exports.addItem = addItem;
exports.deleteItem = deleteItem;
