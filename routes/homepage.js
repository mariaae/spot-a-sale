const express = require('express')
const router = express.Router()

// Require Homepage Controller
const homepageController = require('../controllers/homepageController')

// Homepage Route
router.get('/', homepageController.index)

module.exports = router

