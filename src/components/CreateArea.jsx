import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    
    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form>
                <input id="title" name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
                <textarea id="content" name="content" onChange={handleChange} placeholder="Take a note..." value={note.content}rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;