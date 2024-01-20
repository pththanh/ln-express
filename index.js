const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Login Page!')
})

app.get('/register', (req, res) => {
  res.send('Register Page!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})