const http = require('http');
const fs = require('fs');
const $ = require('jquery')
const url = require('url')
const querystring = require('querystring')
const util = require('util')
var greetings = require('./greetings.js');


var filename = 'jsdb.json'

http.createServer(function (req, res) {
	if (req.url == "/json") {
		// console.log('test');
		var post = ''

		// POST请求的内容全部的都在请求体中，http.ServerRequest并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所有node.js默认是不会解析请求体的，当你需要的时候，需要手动来做。
		req.on('data',function(chunk) {
			post += chunk
		})
		req.on('end',function() {
			post = querystring.parse(post)
			res.write('json')
			console.log(post);
			// util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的函数
			res.end(util.inspect(post))
		})

	} else {
		fs.readFile('./views/index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			console.log(greetings.sayHelloInEnglish());
			res.end();
		});
	}
}).listen(3000);

var jsonap = function(data) {
	fs.appendFile(filename,data,function(err) {
		if(err)throw err;
		console.log('updated');
	})
}