import React, { useState } from "react";


import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';

import { DeleteButton, EditButton, DuplicateButton, ArchiveButton, UnarchiveButton, TrashButton } from "../UI/Buttons/NoteButtons";
import OneActionModal from "../UI/Modals/OneActionModal";
import DuplicateNoteModal from "../UI/Modals/DuplicateNoteModal";


function StaticNote(props) {

  const [duplicateModalOpen, setDuplicateModalOpen] = useState(false); //When true it will open the duplicate note modal
  const [showButtons, setShowButtons] = useState(props.showButtons);

  const[oneActionModalOpen, setOneActionModalOpen] = useState(false);
  const [oneActionModalProps, setOneActionModalProps] = useState({
    question : "",
    action : null
  });

  // -----------------------------------------------------------------------------------------
  function handleOpenDuplicateClick() { //Opens the the duplicate modal menu
    setDuplicateModalOpen(true);

    if (props.curNote.id) {//Prevent the user from editing the default note
    } else {
      return;
    }
  }
  function handleDuplicateClick(title) { //Getting the title of the duplicated note from the DuplicateNoteModal component.
    setDuplicateModalOpen(false);//Closing the duplicating modal
    props.handleDuplicateClick(title);//Sending the title of the duplicated note to a function at Note component
  }
  // -----------------------------ARCHIVE FUNCTIONS------------------------------------------------------------
  function handleOpenArchiveClick() {
    setOneActionModalProps({
      question: "Are you sure you want to archive the note?",
      action : handleArchiveNoteClick
    })
    setOneActionModalOpen(true);
  }
  function handleArchiveNoteClick() {
    setOneActionModalOpen(false);//Closing the archive modal
    props.archiveNote();
  }

  // --------------------------UNARCHIVE FUCNTIONS---------------------------------------------------------------
  function handleOpenUnarchiveClick() {
    setOneActionModalProps({
      question: "Are you sure you want to unarchive the note?",
      action : handleUnarchiveNoteClick
    })
    setOneActionModalOpen(true);
  }
  function handleUnarchiveNoteClick() {
    setOneActionModalOpen(false);//Closing the archive modal
    props.unarchiveNote();
  }
  // ----------------------TRASH FUNCTIONS-------------------------------------------------------------------
  function handleOpenTrashClick() {
    setOneActionModalProps({
      question: "Are you sure you want move the note to trash?",
      action : handleTrashNoteClick
    })
    setOneActionModalOpen(true);
  }
  function handleTrashNoteClick() {
    setOneActionModalOpen(false);//Closing the archive modal
    props.trashClick();
  }
  // -----------------------DELETE FUCNTION------------------------------------------------------------------
  function handleOpenDeleteClick() {
    setOneActionModalProps({
      question: "Are you sure you want to permanently delete the note?",
      action : handleDeleteNoteClick
    })
    setOneActionModalOpen(true);
  }
  function handleDeleteNoteClick() {
    setOneActionModalOpen(false);//Closing the archive modal
    props.handleDeleteClick();
  }


  function handleEditClick() {
    props.changeEditState(true);
  }

  function loadSpecificCategoryIcons(isLoading) {

    switch (props.curNote.category) {
      case "notes": {
        return <React.Fragment>
          <Grid item xs={2}>{/* Archive button */}
            {props.isLoading ? <ArchiveButton onClick={() => { }} status="disabled" /> : <ArchiveButton onClick={handleOpenArchiveClick} />}
          </Grid>
          <Grid item xs={2}>{/* Trash button */}
            {props.isLoading ? <TrashButton onClick={() => { }} status="disabled" /> : <TrashButton onClick={handleOpenTrashClick} />}
          </Grid>
        </React.Fragment>
          ;
      }
      case "archive": {
        return <React.Fragment>
          <Grid item xs={2}>{/* UnarchiveButton button */}
            {props.isLoading ? <UnarchiveButton onClick={() => { }} status="disabled" /> : <UnarchiveButton onClick={handleOpenUnarchiveClick} />}
          </Grid>
          <Grid item xs={2}>{/* Trash button */}
            {props.isLoading ? <TrashButton onClick={() => { }} status="disabled" /> : <TrashButton onClick={handleOpenTrashClick} />}
          </Grid>
        </React.Fragment>
          ;
      }
      case "trash": {
        return <Grid item xs={2}>{/* Delete button */}
          {props.isLoading ? <DeleteButton onClick={() => { }} status="disabled" /> : <DeleteButton onClick={handleOpenDeleteClick} />}
        </Grid>
      }
      default: {
        break;
      }
    }

  }
  return (
    <React.Fragment>
      <div className="note"  >

        <div className="note-title"><h4> {props.isLoading ?"" : props.curNote.title}</h4></div>
        <div className="note-content"  > <p>{props.isLoading ? <CircularProgress /> : props.curNote.content}</p></div>
        {showButtons ? <Grid container spacing={0} direction="row-reverse">
          <Grid item xs={2}>{/* Edit button */}
            {props.isLoading ? <EditButton onClick={() => { }} status="disabled" /> : <EditButton onClick={handleEditClick} />}
          </Grid>
          <Grid item xs={2}> {/* Duplicate button */}
            {props.isLoading ? <DuplicateButton onClick={() => { }} status="disabled" /> : <DuplicateButton onClick={handleOpenDuplicateClick} />}

          </Grid>
          {loadSpecificCategoryIcons(props.isLoading)}
        </Grid>
          : ""}
      </div>

      {oneActionModalOpen ? <OneActionModal modalOpen={oneActionModalOpen} setModalOpen={setOneActionModalOpen} question={oneActionModalProps.question} onClick={oneActionModalProps.action} /> : "" }
      {duplicateModalOpen ? <DuplicateNoteModal duplicateModalOpen={duplicateModalOpen} setDuplicateModalOpen={setDuplicateModalOpen} curTitle={props.curNote.title} handleDuplicateClick={handleDuplicateClick} /> : ""}
    </React.Fragment>

  );
}
export default StaticNote;

