const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

// Root route without pug
// app.get('/', (req, res) => {
//   res.send('Hello there!')
// })

// Render template with pug
app.get('/', (req, res) => {
  res.render('index')
})

// Setup server
app.listen(port, () => console.log(`Listening on port ${port}✨`))