const storeModel = require('../models/store')

//Index
exports.index = async (req, res) => {
  stores = await storeModel.find()
  res.send(stores)
}

//Show
exports.show = async (req, res) => {
  store = await storeModel.findById(req.params.id)
  res.send(store)
}

// Create
exports.create = async (req, res) => {
  store = await storeModel.create(req.body)
  res.send(store)
}

// Delete
exports.delete = async (req, res) => {
  const _id = req.params.id
  store = await storeModel.deleteOne({_id})
  res.send("ok")
}