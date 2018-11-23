const express = require('express')
const router = express.Router()

// Require Store Controller
const storeController = require('../controllers/storeController')

// Store Routes
router.get('/stores', storeController.index)

module.exports = router


