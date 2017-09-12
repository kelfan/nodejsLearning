// node v6.11
var http = require('http')
var url = require('url')
var dt = require('./myfirstmodule')

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
	res.write('the date and time are currently: '+dt.myDateTime())
	res.write(req.url)

	// 测试 http://localhost:8080/?year=2017&month=July
	var q = url.parse(req.url, true).query 
	var txt = q.year +' '+q.month // 2017 July

	res.end(txt)
	// res.end()
	// res.end('Hello World')
}).listen(8080)

console.log('this example is different');
console.log('the result is displayed in the command line interface');