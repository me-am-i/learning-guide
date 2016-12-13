var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

mongoose.connect('mongodb://127.0.0.1/test')
var Bear = require('./app/models/bear')

var router = express.Router()

router.get('/', function(req, res) {
  res.json({ message: 'tangweikun! welcome to my api!' })
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port', port)
