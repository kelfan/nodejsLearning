'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports.assistantHandler= (req, res) => {
	const app = new ActionsSdkApp({request: req, response: res});

	// Create functions to handle requests here
  	function responseHandler (assitApp) {
	  // intent contains the name of the intent you defined in `initialTriggers`
	  let intent = assitApp.getIntent();
	  switch (intent) {
	    case assitApp.StandardIntents.MAIN:
	      assitApp.ask('Welcome! Say a number.');
	      break;

	    case assitApp.StandardIntents.TEXT:
	      assitApp.tell('I do not know what you say yet');
	      break;
	  }
	}

	app.handleRequest(responseHandler);
}

