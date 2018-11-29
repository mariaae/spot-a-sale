const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Require Routers
const homepageRouter = require('./routes/homepage')
const storesRouter = require('./routes/stores')
const eventsRouter = require('./routes/events')
const customersRouter = require('./routes/customers')

// Require DB
require('./mongo-connection')

// Require ExpressJS
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cors())

// Add routes to middleware
app.use('/', homepageRouter)
app.use('/', storesRouter)
app.use('/', eventsRouter)
app.use('/', customersRouter)

module.exports = app