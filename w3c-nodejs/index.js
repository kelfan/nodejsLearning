// 创建数据库 https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
// npm install mysql
// //https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
var mysql = require('mysql')

var con = mysql.createConnection({
	host: 'localhost',
	user: 'username',
	password: 'password'
})

con.connect(function(err) {
	if (err) {throw err}
	console.log('connected')
	// 创建数据库
	var sql = 'CREATE DATABASE mydb'
	// 创建数据表
	var sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))'
	// 创建逐渐 
	var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'
	// 改变主键
	var sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY'
	// 插入行 
	var sql = 'INSERT INTO customers (name, address) VALUES("company Inc", "highway 37")'

	con.query(sql,function (err,result) {
		if (err) {throw err}
		console.log('result: '+result)
	})
})