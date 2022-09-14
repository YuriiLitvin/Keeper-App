import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isClicked, setIsClicked] = useState(false);

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

    // function submitNote(event) {
    //     event.preventDefault();
    //     props.onAdd(note);
    //     setNote({
    //         title: "",
    //         content: ""
    //     });
    // }

    function handleClick() {
        setIsClicked(true);
    }
    
    return (
        <div>
            <form className="create-note" action="/api" method="post">
                {isClicked && <input 
                    id="title" 
                    name="title" 
                    onChange={handleChange} 
                    placeholder="Title" 
                    value={note.title}
                />}
                <textarea 
                    id="content" 
                    name="content" 
                    onChange={handleChange} 
                    placeholder="Take a note..." 
                    value={note.content} 
                    rows={isClicked ? "3" :"1"}
                    onClick={handleClick}
                />
                <Zoom in={isClicked}>
                    {/* <Fab color="primary" onClick={submitNote}> */}
                    <Fab color="primary" type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    )
}

export default CreateArea;