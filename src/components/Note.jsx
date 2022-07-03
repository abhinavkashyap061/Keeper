import React from "react";
import ReactDOM from "react-dom";

function Note() {
    
    const title="sample title";
    const content = "sample content";

    return(

        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>

    )
}

export default Note;