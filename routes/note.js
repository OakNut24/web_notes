const routes = require('express').Router({mergeParams: true});
let Note = require('../models/Note');
const {addNewNote, getUserNotes, getNoteWithID, updateNoteWithId,deleteNoteWithId,getUserNotesWithCategory, archiveNoteWithId,unarchiveNoteWithId,trashNoteWithId} = require("../controllers/note");
const {isUserAuthenticated} = require("../middleware/auth");

//@path /note/:googleId/categoryName/:categoryName   --> get all the user's notes with the requested category(notes,archive,trash)
routes.route("/:googleId/categoryName/:categoryName")
.get(getUserNotesWithCategory);


//@path /note/add   --> add a single note
routes.route('/add').post(addNewNote);//@function: Using the function from the note.js controller

//@path /archive/:noteID   --> Change the note's category to archive
routes.route('/archive/:noteID').patch(archiveNoteWithId);//@function: Using the function from the note.js controller
//@path /unarchive/:noteID   --> Change the note's category to notes
routes.route('/unarchive/:noteID').patch(unarchiveNoteWithId);//@function: Using the function from the note.js controller

//@path /trash/:noteID   --> Change the note's category to trash
routes.route('/trash/:noteID').patch(trashNoteWithId);//@function: Using the function from the note.js controller



//@path /note:noteID
routes.route("/:noteID")
// .get(getNoteWithID)//@function: Get the note with given noteID
.patch(updateNoteWithId)//@function: Updates the note with the new data 
.delete(deleteNoteWithId);//@function: Delete note with the given noteID


module.exports = routes;
