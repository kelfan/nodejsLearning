exports.permissionHandler = (app) => {
	// Choose one or more supported permissions to request:
	// app.SupportedPermissions.NAME
	// app.SupportedPermissions.DEVICE_PRECISE_LOCATION
	// app.SupportedPermissions.DEVICE_COARSE_LOCATION

	let namePermission = app.SupportedPermissions.NAME;
	let preciseLocationPermission = app.SupportedPermissions.DEVICE_PRECISE_LOCATION
	let coarseLocationPermission = app.SupportedPermissions.DEVICE_COARSE_LOCATION


	// Ask for one permission
	// app.askForPermission('To address you by name', namePermission);
	
	// Ask for more than one permission. User can authorize all or none.
	app.askForPermissions('To address you by name and know your location',
	    [namePermission, preciseLocationPermission, coarseLocationPermission]);
}

