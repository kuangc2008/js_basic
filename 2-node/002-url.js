var http = require("http");
var url = require("url");


var server = http.createServer(function(req, res) {
	
	console.log(req.url);
	console.log(url.parse(req.url));

	
	var pathname = url.parse(req.url).pathname;
	console.log("pathName->" + pathname);
	
	var pathParsed = url.parse(req.url, true);
	console.log(pathParsed);
	
	console.log(pathParsed.query.age);
});

server.listen(3000, "127.0.0.1");
console.log('Server runing at http://127.0.0.1:3000');