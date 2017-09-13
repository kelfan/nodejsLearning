'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
const permissions = require('./permission.js');


exports.assistantHandler = (req, res) => {
    const app = new ActionsSdkApp({
        request: req,
        response: res
    });

    // Create functions to handle requests here
    function mainIntent(app) {
    	console.log('assistant.js/mainIntent');
    	permissions.permissionHandler(app)
        let inputPrompt = app.buildInputPrompt(false,
            'Hi! Say something',['what would you like','how is your day','what would you want']);
        app.ask(inputPrompt);
        if (app.isPermissionGranted()) {
            var displayName = app.getUserName().displayName;
            var deviceCoordinates = app.getDeviceLocation().coordinates;
            console.log(displayName);
        }
    }

    function respond(app) {
    	console.log('assistant.js/respond');
		if (app.isPermissionGranted()) {
			var displayName = app.getUserName().displayName;
			var deviceCoordinates = app.getDeviceLocation().coordinates;
			console.log(displayName);
		}
		
		var str = 'Sorry. I don\'t understand what you say';
		if (app.getRawInput() == 'hello') {
			str = 'hello'
		}
        let inputPrompt = app.buildInputPrompt(false,
            str);
        app.ask(inputPrompt);

        // console.log(app.getDeviceLocation().address);
    }

    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, mainIntent);
    actionMap.set(app.StandardIntents.TEXT, respond);

    app.handleRequest(actionMap);
}
