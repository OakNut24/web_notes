const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  category:{
    type: String,
    require:true
  },
  noteType:{
    type:String,
    require:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

exports.NoteSchema = mongoose.model('Note', NoteSchema)
