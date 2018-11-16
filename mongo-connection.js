// Import mongoose module
const mongoose = require('mongoose')

// Setup default mongoose connection
// mongoDB = 'mongodb://127.0.0.1/my_database';
const mongoDB = 'mongodb://localhost:27017/data'
mongoose.connect(mongoDB, { useNewUrlParser: true})
  .then(() => {
    console.log('Mongoose connected 🎉')
  })
  .catch(err => {
    console.log(err)
  })

mongoose.Promise = global.Promise;
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Source:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose