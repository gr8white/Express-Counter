var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'))

var counter = 0

app.get('/api/increment', function (req, res, nextFn) {
  counter = counter + 1
  res.send('' + counter)
  console.log(counter)
})

app.get('/api/decrement', function (req, res, nextFn) {
  counter = counter - 1
  res.send('' + counter)
  console.log(counter)
})

app.get('/api/value', function (req, res, nextFn) {
  res.send('' + counter)
})

app.get('/api/reset', function (req, res, nextFn) {
  counter = 0
  res.send('' + counter)
  console.log(counter)
})

app.listen(3000, function () {
  console.log('server is listening...')
})
