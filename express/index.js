const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('root path');
})

app.get('/help', (req, res) => {
    res.send('You contacted help');
  })

app.get('/home', (req, res) => {
    res.send('You contacted home');
  })  

app.get('/contacts', (req, res) => {
    res.send('You searched contacts');
  })

app.get('*', (req, res) => {
    res.send('path does not exist');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})