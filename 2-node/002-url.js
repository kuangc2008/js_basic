var http = require("http");
var url = require("url");


var server = http.createServer(function(req, res) {
	
	console(req.url);
	
	console(url.parse(req.url));

	
	
	var pathname = url.parse(req.url).pathname;
	
	console.log("pathName->" + pathname);
	
});