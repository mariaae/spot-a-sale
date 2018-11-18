const express = require('express')
const bodyParser = require('body-parser')

// Require services
const StoreService = require('./services/store-service')
const EventService = require('./services/event-service')
const CustomerService = require('./services/customer-service')

// Require Models
const StoreModel = require('./models/store')
const EventModel = require('./models/event')
const CustomerModel = require('./models/customer')

// Require DB
require('./mongo-connection')

// Require ExpressJS
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

// Routes

// Root
app.get('/', (req, res) => {
  res.render('index')
})

// Store Routes
app.get('/stores', async(req, resp) => {
  // const stores = StoreModel.find()
  const stores = await StoreService.findAll()
  resp.render('stores/index', { stores })
})

app.get('/stores/:id', async(req, resp) => {
  const store = StoreModel.findOne(req.params.id).populate('events')
  // const store = await StoreService.find(req.params.id)
  resp.render('stores/show', { store })
})

app.post('/stores/new', async(req, resp) => {
  // const store = await StoreModel.create(req.body)
  const store = await StoreService.add(req.body)
  // resp.render('stores/new')
  resp.send(store)
})

app.delete('/stores/:id', async(req, resp) => {
  const store = await StoreService.del(req.params.id)

  resp.send(store)
})

// Event Routes
app.get('/events', async(req, resp) => {
  const events = await EventModel.find(req.params.id)

  resp.render('events/index', { events })
})

app.get('/events/:id', async(req, resp) => {
  const event = await EventModel.findById(req.params.id)

  resp.render('events/show', { event })
})

app.post('/events/new', async(req, resp) => {
  const event = await EventModel.create(req.body)

  resp.send(event)
})

app.delete('/events/:id', async(req, resp) => {
  // Check if I really need the services
  const _id = req.params.id
  const event = await EventModel.remove({ _id })

  resp.send(event)
})

// Customer Routes

app.get('/customers', async(req, resp) => {
  const customers = await CustomerModel.find()

  resp.render('customers/index', { customers })
})

app.get('/customers/:id', async(req, resp) => {
  const customer = await CustomerModel.findOne(req.params.id)

  resp.send(customer)
})

app.post('/customers/new', async(req, resp) => {
  const customer = await CustomerModel.create(req.body)

  resp.send(customer)
})

app.delete('/customers/:id', async(req, resp) => {
  const _id = req.params.id
  const customer = await CustomerModel.remove({ _id })

  resp.send(customer)
})

module.exports = app