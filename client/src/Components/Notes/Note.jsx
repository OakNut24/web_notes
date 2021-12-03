import React, { useEffect, useState } from "react";



import StaticNote from "./StaticNote";
import EditNote from "./EditNote";

function Note(props) {
  const [isLoading, setIsLoading] = useState(true); //Indicator for displaying the loading UI

  const [isEdit, setIsEdit] = useState(false);
  // const [duplicateModalOpen, setDuplicateModalOpen] = useState(false); //When true it will open the duplicate note modal

  const [note, setNote] = useState({    //The note values given from the DB
    title: props.title,
    content: props.content,
    category: props.category,
    noteType: props.noteType,
    lables: props.lables
  });


  useEffect(() => { //Refreshing the note values when saving
    let title = props.title;
    let content = props.content;

    setNote({    //The note values given from the DB
      title: title,
      content: content,
      category: props.category,
      noteType: props.noteType,
      lables: props.lables
    });
    setIsLoading(false);
  }
    , [props.title, props.content,props.category,props.noteType,props.lables]);

  function deleteClick() {
    props.noteVarFun.onDelete(props.id); //Getting the _id of the note from the props. The _id is given from the Notebook.jsx
  }
  function trashClick(){
    props.noteVarFun.trashNote(props.id);
  }
  function changeEditState(state) {    //Changing the isEdit state and differentiate between the default note from the user's notes
    if (props.id === "") {
      //Prevent the user from editing the default note
      return;
    } else {
      setIsEdit(state);
    }
  }


  function duplicateNote(newTitle) {
    let newNote = {
      _id: "",
      title: newTitle,
      content: props.content,
      googleId: props.googleId,
      category: props.category,
      noteType: props.noteType,
      lables: props.lables
    };



    props.noteVarFun.duplicateNote(newNote);
  }
  function handleSaveClick(title, content) {   //Updates the note useState values for the new ones(client side) + Trigger a patch request for updating the note in the DB (server side)

    let newNote = ({
      _id: props.id,
      title: title,
      content: content
    });

    setIsLoading(true);
    setNote(newNote);
    props.noteVarFun.onNotePatch(newNote); //Triggering the backend patching function at the index.jsx
    changeEditState(false); //Setting the "view state" of the note back for edit=false
  }

  function handleArchiveClick(){
    props.noteVarFun.archiveNote(props.id);//Triggering the function inside the index.jsx.
  }

  function unarchiveNote(){
    props.noteVarFun.unarchiveNote(props.id);
  }

  return (
    <React.Fragment>
      {isEdit ? <EditNote handleEditClick={changeEditState} handleSaveClick={handleSaveClick} changeEditState={changeEditState} curNote={note} setIsEdit={setIsEdit} /> : <StaticNote curNote={note} showButtons={props.id === "" ? false : true} isLoading={isLoading} changeEditState={changeEditState} handleDuplicateClick={duplicateNote} handleDeleteClick={deleteClick} archiveNote={handleArchiveClick} unarchiveNote={unarchiveNote} trashClick={trashClick}/>
      }
    </React.Fragment>

  );
}
export default Note;



