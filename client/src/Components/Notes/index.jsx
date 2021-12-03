import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import CreateArea from "./CreateArea";
import Notebook from "./Notebook";
import { getUserInfo } from "../Services/localStorage";
import Snackbar from "../UI/Input/SnackBar";
import { Grid } from "@mui/material";
import SideNav from "../UI/SideNav/SideNav";
import { addNote as addNoteAPI, deleteNote as deleteNoteAPI, patchNote as patchNoteAPI, getNotesByCategory as getNotesByCategoryAPI, archiveNote as archiveNoteAPI, unarchiveNote as unarchiveNoteAPI, trashNote as trashNoteAPI } from "../API/Notes.jsx";

function App() {
  const userInfo = getUserInfo();

  const [notes, setNotes] = useState([]);//Saving the notes data from DB in the client as a useState
  const [curCategory, setCurCategory] = useState("notes");//Stores the current category of the notes the client has selected
  const [isNotesFetched, setIsNotesFetched] = useState(false);//Indicates either the notes is fetced from the DB. If it is it will trigger the loading of the notebook(the notes).  
  const [isFetchingNotes, setIsFetchingNotes] = useState(false);
  const [snack, setSnack] = useState({ isOpen: false, message: "", type: "" });

  const noteVarFun = { //The note variables and functions. "Drilling" an object instead of each function by name
    notes: notes,
    onDelete: deleteNote,
    onNotePatch: patchNoteInDB,
    duplicateNote: duplicateNote,
    archiveNote: archiveNote,
    finishedLoadingNotes: finishedLoadingNotes,
    unarchiveNote: unarchiveNote,
    trashNote: trashNote
  }
  useEffect(() => getNotesByCategory(curCategory), [curCategory]); //Load the notes from DB and render it on the user UI - Make the switching between categories possible


  //Fetching notes from DB and updating
  async function getNotesByCategory() {

    setIsFetchingNotes(true);
    if (userInfo) { //Sending a request to ther server only of the client has info save in localStorage.
      let googleId = userInfo.googleId;
      const notes = await getNotesByCategoryAPI(googleId, curCategory);
      updateNotes(notes);
    }

  };
  function finishedLoadingNotes() {
    setIsNotesFetched(false);
  }

  function updateNotes(notes) { //Update the notes with the updated version
    if (notes) {
      setNotes(notes);
      setIsFetchingNotes(false);
      setIsNotesFetched(true);
    } else {
      //  Indicates the client of an error getting the notes from
      showErrorSnack("Error loading notes! Please contact support");
    }
  }

  //CRUD Note functions
  const addNote = async (note) => {
    let newNote = {
      _id: "",
      title: note.title,
      content: note.content,
      googleId: userInfo.googleId,
      category: "notes",
      noteType: "note",
      lables: []
    };
    const result = await addNoteAPI(newNote);
    if (result) {
      setNotes((prevNotes) => {
        newNote._id = result.data._id; //It is the unique note id created in the sever side. We are saving it inside the newNote for when the user delete a note - the Note object "Knows" its own id at the server side
        showSuccessSnack("Successfuly created note")
        return [...prevNotes, newNote];
      });
    } else {
      showErrorSnack("Error creating note, please contact support.");
    }
  };

  function duplicateNote(note) {
    note.googleId = userInfo.googleId;
    addNote(note);
  }
  function deleteNote(id) {

    if (deleteNoteAPI(id)) {
      removeNoteFromLocalDB(id); //Removing the deleted note from the client notes DB. Instead of fetching it again from the server.
      showSuccessSnack("Note successfuly deleted.")

    } else {
      showErrorSnack("Note unsuccessfuly deleted. Please contact support");

    }
  }

  function patchNoteInDB(note) { //Updating the patched note in the client notes DB. Instead of fetching it again from the server.
    if (patchNoteAPI(note)) {
      showSuccessSnack("Successfuly edited note.")
      updatePatchLocalDB(note);//Created this one use function to organize the code
    } else {
      showErrorSnack("Note unsuccessfuly edited. Please contact support");
    }
  }

  function updatePatchLocalDB(updatedNote) { //One use function for patching the client notes DB.
    for (let index = 0; index < notes.length; index++) {
      const note = notes[index];
      if (updatedNote._id === note._id) {
        notes[index] = updatedNote;
        index = notes.length - 1;//To stop the loop.
      }
    }
  }

  //Note's Categories (Archive, Unarchive, Trash)

  async function archiveNote(noteId) { //Updating the both server and client to change the category of the note to Archive.
    const result = await archiveNoteAPI(noteId);
    if (result) {
      showSuccessSnack("Successfuly archived note!");
      removeNoteFromLocalDB(noteId);
    } else {
      showErrorSnack("Error trying to archive note! Please contact support")
    }
  }
  async function unarchiveNote(noteId) { //Updating the both server and client to change the category of the note to Notes.
    const result = await unarchiveNoteAPI(noteId);
    if (result) {
      showSuccessSnack("Successfuly unarchived note!")
      removeNoteFromLocalDB(noteId);
    } else {
      showErrorSnack("Error trying to unarchive note! Please contact support")
    }
  }
  async function trashNote(noteId) { //Updating the both server and client to change the category of the note to Trash.
    const result = await trashNoteAPI(noteId);
    if (result) {
      showSuccessSnack("Successfuly moved note to trash")
      removeNoteFromLocalDB(noteId);
    } else {
      showErrorSnack("Error trying to move note to trash ! Please contact support")
    }
  }

  function removeNoteFromLocalDB(removeNoteId) { //Remove the selected note from the client side notes.
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note._id !== removeNoteId;
      });
    });
  }

  //Notifications
  function showSuccessSnack(text) {
    setSnack({
      isOpen: true,
      message: text,
      type: "success",
    });
  }
  function showErrorSnack(text) {

    setSnack({
      isOpen: true,
      message: text,
      type: "error",
    });

  }

  return (
    <div>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item xs={0} sm={3} md={2} lg={2} xl={1} direction="column">
          <SideNav curCategory={curCategory} setCurCategory={setCurCategory} />
        </Grid>
        <Grid container item xs direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <Grid item xs>
            <CreateArea onAdd={addNote} />
          </Grid>
          <Grid item xs={12}>
            <Notebook
              key="0"
              isNotesFetched={isNotesFetched}
              isFetchingNotes={isFetchingNotes}
              category={curCategory}
              noteVarFun={noteVarFun}
            />
          </Grid>
        </Grid>
        <Snackbar snack={snack} setSnack={setSnack} />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;


