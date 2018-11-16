// Require Mongoose
const mongoose = require('mongoose')

// Define a Schema
const StoreSchema = new mongoose.Schema({
  name: String,
  address: String,
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
})

// Compile model from schema
module.exports = mongoose.model('Store', StoreSchema);