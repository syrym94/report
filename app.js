var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()
app.use(express.static('./build/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './build/index.html'))
})
app.listen(9998, () => {
  console.log('Magic is happening on port 9998')
})