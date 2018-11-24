const express = require('express')
const router = express.Router()

// Require Event Controller

const eventController = require('../controllers/eventController')

// Event Routes
router.get('/events', eventController.index)
router.get('/events/:id', eventController.show)
router.delete('/events/:id', eventController.delete)
router.post('/events', eventController.create)

module.exports = router