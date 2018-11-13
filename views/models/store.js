const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
  name: String,
  address: String,
  events = [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }]
})

module.exports = mongoose.model('Store', StoreSchema);