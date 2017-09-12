var express = require('express')
var app = express()
var bodyparser = require('body-parser');
app.use(bodyparser.json())
const Assistant = require('actions-on-google').ActionsSdkApp;

const WELCOME_INTENT = 'input.welcome';
var NUMBER_INTENT = 'input.number';

	function responseHandler (assitApp) {
	  // intent contains the name of the intent you defined in `initialTriggers`
	  let intent = assitApp.getIntent();
	  switch (intent) {
	    case assitApp.StandardIntents.MAIN:
	      assitApp.ask('Welcome! Say a number.');
	      break;

	    case assitApp.StandardIntents.TEXT:
	      let number = assitApp.getArgument(NUMBER_INTENT);
	      assitApp.tell('You said ' + number);
	      break;
	  }
	}

// GET method route
app.all('/', function (req, res) {
  	console.log('test get post');
	// you can add the function name instead of an action map
	const assistant = new Assistant({request: req, response: res});
	assistant.handleRequest(responseHandler);
})

app.all('/test', function(req,res) {
	console.log('test');
	res.send('helloworld')
})


app.listen(3000)

// 参考
https://developers.google.com/actions/reference/nodejs/ApiAiApp