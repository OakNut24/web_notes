const mongoose = require('mongoose')

const connectDB = async () => { //I could also use mongoose.Promise = global.Promise -> In order to "wait" for the connection to happen
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true //Not getting errors when connection to MongoDB
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB