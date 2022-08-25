import React from "react";

function CreateArea() {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" />
                <textarea name="contert" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;