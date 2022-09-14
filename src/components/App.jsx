import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    });

    function addItem(note) {
        setNotes(prevItems => {
            return [
                ...prevItems,
                note
            ]
        });
    }

    function deleteItem(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;    
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {addItem}/>
            {notes.map((note, index) => (
                <Note 
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {deleteItem}
                />
            ))}
            <p>{!data ? "Loading" : data }</p>
            <Footer />
        </div>
    );
}

export default App;

