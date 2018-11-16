const express = require('express')
const bodyParser = require('body-parser')

const StoreService = require('./services/store-service')
const StoreModel = require('./models/store')
const EventModel = require('./models/event')

require('./mongo-connection')

const app = express()
const port = 3000



app.set('view engine', 'pug')
app.use(bodyParser.json())

// Setup server
app.listen(port, () => console.log(`Listening on port ${port}✨`))

// Root route without pug
// app.get('/', (req, res) => {
//   res.send('Hello there!')
// })

// Render template with pug
app.get('/', (req, res) => {
  res.render('index')
})

// Store Routes
app.get('/stores', async(req, resp) => {
  // const stores = StoreModel.find()
  const stores = await StoreService.findAll()
  resp.render('stores', { stores })
})

app.get('/stores/:id', async(req, resp) => {
  // const store = StoreModel.findOne(req.params.id)
  const store = await StoreMode.findOne(req.params.id)
  res.render('data', { data: user })
})

app.post('/stores/new', async(req, resp) => {
  // const store = StoreModel.create(req.body)
  const store = await StoreService.add(req.body)
  resp.send(store)
})

// app.delete('/store/:id', async(req, resp) => {

// })


// Event Routes
// app.get('/events', async(req, resp) => {

// })

// app.get('/event/:id', async(req, resp) => {

// })

// app.post('/event/new', async(req, resp) => {

// })

// app.delete('/event/:id', async(req, resp) => {

// })

// Customer Routes

// app.get('/customers', async(req, resp) => {

// })

// app.get('/customer/:id', async(req, resp) => {

// })

// app.post('/customer/new', async(req, resp) => {

// })

// app.delete('/customer/:id', async(req, resp) => {

// })


// /retailers => All Retailers
// /retailer/:id => A Retailer
// /retailer/:id/stores => All Stores
// /retailer/:id/stores/:id => A store
// /retailer/:id/stores/:id/sales => All sale events
// /retailer/:id/stores/:id/sales/:id => A sale event
// /retailer/:id/stores/:id/sales/:id/customers => Customers attending sale
// /retailer/:id/stores/:id/sales/:id/customers/:id => Specific customer
