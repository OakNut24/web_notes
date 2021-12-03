const mongoose = require("mongoose");
const { NoteSchema } = ("../models/Note");

const Note = mongoose.model('Note', NoteSchema);

const addNewNote = ((req, res) => {

    let note = req.body;//Takes all the data inside the req. googleId and etc'
    let googleId = "";
    if (note) {
        googleId = note.googleId;
    } else {
        googleId = "googleIdError| logged at controllers/note.js";
    }

    const title = note.title;
    const content = note.title;

    const newNote = new Note({
        title: note.title,
        content: note.content,
        googleId: note.googleId,
        category: note.category,
        noteType: note.noteType,
        lables: note.lables
    });

    newNote.save()
        .then(() => res.send({ _id: newNote._id })) //Send the new note created at the MongoDB Atlas with the _id to the client 
        .catch(err => res.status(400).json('Error: ' + err));
});

const getUserNotes = ((req, res) => {

    let userGoogleId = req.params.googleId;
    Note.find({ googleId: userGoogleId }, (err, userNotes) => {
        if (err) {
            res.send(err);
        } else {
            res.json(userNotes);
        }
    });
});


const getNoteWithID = ((req, res) => {

    Note.findOne({ _id: req.params.noteID }, (err, note) => {
        if (err) {
            res.send(err);
        } else {
            if (note) {
                res.json(note);
            } else {
                res.json({ message: "Not not found with ID:" + req.params.noteID });
            }
        }
    });
});

const getUserNotesWithCategory = ((req, res) => {

    let userGoogleId = req.params.googleId;
    let categoryName = req.params.categoryName;

    Note.find({ googleId: userGoogleId, category: categoryName }, (err, userNotes) => {
        if (err) {
            res.send(err);
        } else {
            res.json(userNotes);
        }
    });
});

const updateNoteWithId = ((req, res) => {
    Note.findOneAndUpdate({ _id: req.params.noteID }, {
        title: req.body.title,
        content: req.body.content,
        googleId: req.body.googleId,
        category: req.body.category,
        noteType: req.body.noteType,
        lables: req.body.lables
    }, { new: true, useFindAndModify: false }, (err, note) => {           //new:true -> return the new and updated object 
        if (err) {
            res.send(err);
        } else {
            res.json(note);
        }
    });
});

const deleteNoteWithId = ((req, res) => {

    Note.deleteOne({ _id: req.params.noteID }, (err, note) => {
        if (err) {
            res.send(err)
        } else {
        }
    });
});

const archiveNoteWithId = ((req, res) => {
    Note.findOneAndUpdate({ _id: req.params.noteID }, {
        category: "archive",
    }, { new: true, useFindAndModify: false }, (err, note) => {           //new:true -> return the new and updated object 
        if (err) {
            res.send(err);
        } else {
            res.json(note);
        }
    });
})
const unarchiveNoteWithId = ((req, res) => {
    Note.findOneAndUpdate({ _id: req.params.noteID }, {
        category: "notes",
    }, { new: true, useFindAndModify: false }, (err, note) => {           //new:true -> return the new and updated object 
        if (err) {
            res.send(err);
        } else {
            res.json(note);
        }
    });
})

const trashNoteWithId = ((req, res) => {
    Note.findOneAndUpdate({ _id: req.params.noteID }, {
        category: "trash",
    }, { new: true, useFindAndModify: false }, (err, note) => {           //new:true -> return the new and updated object 
        if (err) {
            res.send(err);
        } else {
            res.json(note);
        }
    });
})



exports.addNewNote = addNewNote;
exports.getUserNotes = getUserNotes;
exports.getNoteWithID = getNoteWithID;
exports.updateNoteWithId = updateNoteWithId; deleteNoteWithId
exports.deleteNoteWithId = deleteNoteWithId;
exports.getUserNotesWithCategory = getUserNotesWithCategory;
exports.archiveNoteWithId = archiveNoteWithId;
exports.trashNoteWithId = trashNoteWithId;
exports.unarchiveNoteWithId =unarchiveNoteWithId;

