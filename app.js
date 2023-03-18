const express = require('express')
const http = require('http')
const bank = require('./lib/bank.js')

const app = express()
const server = http.createServer(app)
const port = 3001

app.use(express.json())

//default route
app.use('*', (req, res) => {
    res.status(404).json('not found')
})

server.listen(port, () => {
    console.log(`Server is listening to requests at http://localhost:${port}`) 
})
  