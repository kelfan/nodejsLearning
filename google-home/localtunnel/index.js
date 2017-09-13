var express = require('express'),
	app = express(),
	bodyparser = require('body-parser'),
	assistant = require('./assistant.js'),
	fs = require('fs'),
	util = require('util');
app.use(bodyparser.json())


// GET method route
app.all('/', function (req, res) {
  	console.log('index.js/');
  	assistant.assistantHandler(req,res)
  	fs.writeFile('req.js', util.inspect(req),function(err) {
  		if (err) {
  			throw err;
  		}
  	})
})

app.all('/test', function(req,res) {
	console.log('index.js/test');
	res.send('helloworld')
})


app.listen(3000)