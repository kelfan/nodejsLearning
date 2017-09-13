'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
const permissions = require('./permission.js');


exports.assistantHandler = (req, res) => {
    console.log('assistantHandler');
    const app = new ActionsSdkApp({
        request: req,
        response: res
    });
    var str = 'Sorry. I don\'t understand what you say';

    if (app.isPermissionGranted()) {
            var displayName = app.getUserName().displayName;
            var deviceCoordinates = app.getDeviceLocation().coordinates;
            console.log(deviceCoordinates);
            voiceResponse('deviceCoordinates')
    }

    // Create functions to handle requests here
    function mainIntent(app) {
    	console.log('assistant.js/mainIntent');
        permissions.permissionHandler(app)
        voiceResponse('welcome')
    }

    function respond(app) {
    	console.log('assistant.js/respond');
		
		if (app.getRawInput() == 'hello') {
			str = 'hello'
		}
        voiceResponse(str)
    }

    function voiceResponse(strIn) {
        let inputPrompt = app.buildInputPrompt(false,strIn);
        app.ask(inputPrompt);
    }

    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, mainIntent);
    actionMap.set(app.StandardIntents.TEXT, respond);

    app.handleRequest(actionMap);
}

