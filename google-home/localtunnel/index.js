var express = require('express'),
	app = express(),
	bodyparser = require('body-parser'),
	assistant = require('./assistant.js')
app.use(bodyparser.json())


// GET method route
app.all('/', function (req, res) {
  	console.log('test get post');
  	assistant.assistantHandler(req,res)
  	console.log('test23');
})

app.all('/test', function(req,res) {
	console.log('test');
	res.send('helloworld')
})


app.listen(3000)