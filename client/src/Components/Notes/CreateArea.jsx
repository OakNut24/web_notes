import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function CreateArea(props) {
  const [isCreating, setIsCreating] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }


  function handleAdd(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault(); //Preventing the page from refreshing when pressing the button

  }

  function creating() {
    setIsCreating(true);
  }

  return (
    <div>
      <form className="create-area">
        <input
          name="title"
          placeholder="Enter title... "
          onChange={handleChange}
          value={note.title}
          onClick={creating}
          maxLength="24"
          minlength="1"
        />
        {isCreating ? (
          <textarea
            name="content"
            placeholder="Enter content..."
            rows="3"
            onChange={handleChange}
            value={note.content}
            maxLength="256"
          ></textarea>
        ) : (
          ""
        )}

        <Zoom in={isCreating}>
          <Fab onClick={handleAdd}>
            <AddOutlinedIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
