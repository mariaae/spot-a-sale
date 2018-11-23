const express = require('express')
const router = express.Router()

// Require Homepage Controller
const homepageController = require('../controllers/storeController')

router.get('/', (req, res) => {
  res.send("Hey there!!")
})

module.exports = router

