// node v6.11
var http = require('http')
var dt = require('./myfirstmodule')

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
	res.write('the date and time are currently: '+dt.myDateTime())
	res.end('Hello World')
}).listen(8080)

console.log('this example is different');
console.log('the result is displayed in the command line interface');