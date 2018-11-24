const customerModel = require('../models/customer')

//Index
exports.index = async (req, res) => {
  customers = await customerModel.find()
  res.send(customers)
}

//Show
exports.show = async (req, res) => {
  customer = await customerModel.findById(req.params.id)
  res.send(customer)
}

// Create
exports.create = async (req, res) => {
  customer = await customerModel.create(req.body)
  res.send(customer)
}

// Delete
exports.delete = async (req, res) => {
  const _id = req.params.id
  customer = await customerModel.deleteOne({_id})
  res.send(customer)
}