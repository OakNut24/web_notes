import React from "react";
import Note from "./Note";
import SkeletonNote from "./SkeletonNote";
function Notebook(props) {

  function loadNotes() {
    if (props.noteVarFun.notes.length > 0 && props.isNotesFetched) {
      return props.noteVarFun.notes.map((note, index) => {
        return <Note key={index} id={note._id} title={note.title} content={note.content} category={note.category} noteType={note.noteType} lables={note.lables} noteVarFun={props.noteVarFun} onDelete={props.onDelete} onNotePatch={props.onNotePatch} handleDuplicateClick={props.handleDuplicateClick} archiveNote={props.archiveNote} unarchiveNote={props.unarchiveNote} />
      })
    } else {
      return loadDefaultCategoryNote(props.category)
    }
    //The default note is 999 in order to prevent duplicated keys between the default note and the DB notes
    //If the loaded DB notes will have the same key as the default note then that DB note will note be rendered.
  }



  function loadNotesSkeleton() {
    let skeletonNotes = [];
    for (let index = 0; index < 5; index++) {
      skeletonNotes.push(<SkeletonNote />);
    };

    return skeletonNotes;
  }

  function loadDefaultCategoryNote(category) {
    switch (category) {
      case "notes": {
        return <Note key="999" id="" title="Create Your First Note!" content="This note will be deleted after you create your first note !" onDelete={() => { }} />;
      }
      case "archive": {
        return <Note key="999" id="" title="You don't have notes in archive!" content="" onDelete={() => { }} />;
      }
      case "trash": {
        return <Note key="999" id="" title="This is the Trash section" content="When you delete notes they will arrive here. Upon deleting note from trash they will be permanently delete" onDelete={() => { }} />;
      }
      default:
        break;
    }
  }




  return <div className="notebook">
    {/* Waiting for the fetchNotedDB function inside index.js to finish */}
    {props.isNotesFetched && !props.isFetchingNotes ? loadNotes() : ""}
    {props.isFetchingNotes ? loadNotesSkeleton() : ""} 
  </div>;


}



export default Notebook;

