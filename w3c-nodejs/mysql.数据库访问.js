// 连接MySQL https://www.w3schools.com/nodejs/nodejs_mysql.asp

// npm install mysql

var mysql = require('mysql')

var con = mysql.createConnection({
	host: 'localhost',
	user: 'username',
	password: 'password'
})

con.connect(function(err) {
	if (err) {throw err}
	console.log('connected')
	con.query(sql,function (err,result) {
		if (err) {throw err}
		console.log('result: '+result)
	})
})