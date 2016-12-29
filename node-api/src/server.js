import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Bear from './models/bear'

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = 8080

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/test')

var router = express.Router()

router.use(function(req, res, next) {
	console.log('Something is happening')
	next()
})

router.get('/', function(req, res) {
	res.json({ message: 'tangweikun! welcome to my api!' })
})

router.route('/bears')
  .post(function(req, res) {
	var bear = new Bear()
	bear.name = req.body.name || 'tangweikun'
	bear.save(function(err) {
		if (err)  res.send(err)
		res.json({ message: 'Bear created' })
	})
})
  .get(function(req, res) {
	Bear.find(function(err, bears) {
		if (err) res.send(err)
		res.json(bears)
	})
})

router.route('/bears/:bear_id')
  .get(function(req, res) {
	Bear.findById(req.params.bear_id, function(err, bear) {
		if (err) req.send(err)
		res.json(bear)
	})
})
  .put(function(req, res) {
	Bear.findById(req.params.bear_id, function(err, bear) {
		if (err) res.send(err)
		bear.name = req.body.name || 'twk'
		bear.save(function(err) {
			if (err) res.send(err)
			res.json({ message: 'Bear updated!' })
		})
	})
})
  .delete(function(req, res) {
	Bear.remove({
		_id: req.params.bear_id
	}, function(err) {
		if (err) res.send(err)
		res.json({ message: 'Successfully deleted' })
	})
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port', port)
