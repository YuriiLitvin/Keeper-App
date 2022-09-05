import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import defaultNotes from "../notes";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    
    function addItem(note) {
        setNotes(prevItems => {
            return [
                ...prevItems,
                note
            ]
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {addItem}/>
            {notes.map((note, index) => (
                <Note 
                    key = {index}
                    title = {note.title}
                    content = {note.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;

