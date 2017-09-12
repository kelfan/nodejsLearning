// https://www.w3schools.com/nodejs/nodejs_email.asp

var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'youremail@gmail.com',
		pass:'yourpassword'
	}
})

var mailOptions = {
	from: 'youremail@gmail.com',
	// 多个接收者
	to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
	subject: 'sending email using nodejs',
	text: 'that was easy'
}
// send html
var mailoptions2 = {
	from: 'youremail@gmail.com',
	to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
	subject: 'sending email using nodejs',
	html: '<h1>welcome</h1><p>that was easy</p>'
}

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error)
	}else{
		console.log('email sent: ' + info.response)
	}
})