const express = require('express')
const router = express.Router()

// Require Customer Controller
const customerController = require('../controllers/customerController')

// Customer Routes
router.get('/customers', customerController.index)
router.get('/customers/:id', customerController.show)
router.delete('/customers/:id', customerController.delete)
router.post('/customers', customerController.create)
module.exports = router