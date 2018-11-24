const eventModel = require('../models/event')

exports.index = async (req, res) => {
  events = await eventModel.find()
  res.send(events)
}

exports.show = async (req, res) => {
  event = await eventModel.findOne(req.params.id)
  res.send(event)
}

exports.create = async (req, res) => {
  event = await eventModel.create(req.body)
  res.send(event)
}

exports.delete = async (req, res) => {
  const _id = req.params.id
  event = await eventModel.deleteOne({_id})
  res.send(event)
}