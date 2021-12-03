import React, { useState } from "react";


import Grid from "@mui/material/Grid";
import InputNote from "../UI/Input/InputNote";
import TextareaNote from "../UI/Input/TextareaNote";


import { SaveButton, CancelButton, DeleteButton } from "../UI/Buttons/NoteButtons";

function Note(props) {
    const [tempNote, setTempNote] = useState({    //A temp state for holding the new values of the note. Saving the user changes.
        title: props.curNote.title,
        content: props.curNote.content,
        googleId: props.curNote.googleId,
        category: props.curNote.category,
        noteType: props.curNote.noteType,
        lables: props.curNote.lables
    });

    function handleCancelClick() { //Setting the temp note values for the cur note values, because the user CANCELED and did not save the changes.
        props.changeEditState(false);
    }


    function handleSaveClick() { //If the user changed the title/content value it will trigger the save function at Note.jsx
        if (tempNote.title !== props.curNote.title || tempNote.content !== props.curNote.content) {
            props.handleSaveClick(tempNote.title, tempNote.content);
        } else {
            props.changeEditState(false);
        }
    }
    return (
        <div className="note">
            <div className="note-edit">
                {/* Return an edit or view template of the note component */}
                <React.Fragment>
                    <InputNote
                        name="title"
                        placeholder="Enter title..."
                        maxLength="24"
                        note={tempNote}
                        value={tempNote.title}
                        setNote={setTempNote}
                    />
                    <TextareaNote
                        name="content"
                        placeholder="Enter content..."
                        maxLength="256"
                        rows="13"
                        note={tempNote}
                        value={tempNote.content}
                        setNote={setTempNote}
                    />
                </React.Fragment>
                <Grid container spacing={0} direction="row-reverse">
                    <Grid item xs={2}> {/* Save button */}
                        <SaveButton onClick={handleSaveClick} />
                    </Grid>
                    <Grid item xs={2}> {/* Cancel button */}
                        <CancelButton onClick={handleCancelClick} />
                    </Grid>
                    <Grid item xs={2}> {/* Delete button(disabled) */}
                        <DeleteButton onClick={() => { }} status="disabled" />
                    </Grid>
                </Grid>

            </div>
        </div>

    );
}
export default Note;




