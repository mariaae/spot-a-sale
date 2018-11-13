const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  category: String,
  percentage: String,
  customers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }]
})

module.exports = mongoose.model('Event', EventSchema);