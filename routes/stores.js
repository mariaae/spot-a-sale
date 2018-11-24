const express = require('express')
const router = express.Router()

// Require Store Controller
const storeController = require('../controllers/storeController')

// Store Routes
router.get('/stores', storeController.index)
router.get('/stores/:id', storeController.show)
router.delete('/stores/:id', storeController.delete)
router.post('/stores', storeController.create)
module.exports = router


