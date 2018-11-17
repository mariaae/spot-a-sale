const StoreModel = require('../models/store')
const EventModel = require('../models/event')

async function addEvent(storeId, eventId){
  const store = await StoreModel.findOne({ _id: storeId })
  const event = await EventModel.findOne({ _id: eventId })

  store.events.push(event)

  await store.save()

  return store
}

async function findAll() {
  return StoreModel.find().populate('events')
}

async function add(store) {
  return StoreModel.create(store)
}

async function find(_id) {
  return StoreModel.findOne({ _id }).populate('events')
}

async function del(_id) {
  return StoreModel.deleteOne({ _id })
}

module.exports = {
  addEvent,
  findAll,
  add,
  find,
  del
}
