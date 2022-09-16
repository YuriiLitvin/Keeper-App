import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((notes) => setNotes(notes));
    });


    function addItem(note) {
        fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: note.title, content: note.content })
        })
        .then(res => console.log(res.status));
    }


    function deleteItem(id) {
        fetch("/api", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ itemId: id })
        })
        .then(res => console.log(res.status));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {addItem}/>
            {notes.map((note, index) => (
                <Note 
                    key = {index}
                    id = {note._id}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {deleteItem}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;

