// node v6.11
var http = require('http')
var url = require('url')
var dt = require('./myfirstmodule')
var fs = require('fs')

http.createServer(function(req,res) {
	// res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
	// res.write('the date and time are currently: '+dt.myDateTime())
	// res.write(req.url)

	// 读取文件 
	fs.readFile('demofile1.html', function(err,data) {
		res.writeHead(200, {'Content-Type':'text/html'})
		res.write(data)
		res.end()
	});

	// 追加文件保存
	fs.appendFile('mynewfile1.txt', 'hello content!', function(err) {
		if (err) {throw err}
		console.log('saved!')
	});	

	// 打开空文件
	fs.open('mynewfile2.txt','w',function(err,file) {
		if (err) {throw err}
		console.log('saved!!')
	})

	// writeFile创建新文件 
	fs.writeFile('mynewfile3.txt', 'hello content!', function(err) {
		if (err) {throw err}
		console.log('saved!')
	});	


	// 更新文件 
	fs.appendFile('mynewfile1.txt', 'this is my text', function (err) {
		if (err) {throw err}
		console.log('updated!')
	});

	// 更新文件 
	fs.writeFile('mynewfile3.txt', 'data', function(err) {
		if (err) {throw err}
		console.log('replaced')
	});

	// 删除文件 
	fs.unlink('mynewfile2.txt', function(err) {
		if (err) {throw err}
		console.log('file deleted')
	});

	// 文件改名 
	fs.rename('mynewfile1.txt','myrenamedfile.txt',function (err) {
		if (err) {throw err}
		console.log('file renamed')
	})

	// 测试 http://localhost:8080/?year=2017&month=July
	// var q = url.parse(req.url, true).query 
	// var txt = q.year +' '+q.month // 2017 July

	// res.end(txt)
	// res.end()
	// res.end('Hello World')
}).listen(8080)

console.log('this example is different');
console.log('the result is displayed in the command line interface');