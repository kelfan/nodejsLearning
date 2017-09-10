var http = require('http');
var fs = require('fs');
var $ = require('jquery')
var url = require('url')
var query = require('querystring')

http.createServer(function (req, res) {
	if (req.url == "/json") {
		res.write('json')
		res.end()
	} else {
		fs.readFile('./views/index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	}
}).listen(3000);