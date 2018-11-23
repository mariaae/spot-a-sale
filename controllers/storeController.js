const storeModel = require('../models/store')

//Index
exports.index = async (req, res) => {
  StoreModel.find()
  // stores = await StoreModel.find()
  // res.send(stores)
}

//Show
exports.show = async (req, res) => {
  console.log("hola")
  // resp.send("Not implemented: Store show")
}

//New


// Edit


// Create



// Delete