var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	
	if (pathname == '/' && query == null) {
		pathname = "testform.html";
	}
	
	
	
	var extname = path.extname(pathname);
	
	fs.readFile("./static/" + pathname, function(err, data) {
		if (err) {
			fs.readFile("./static/404.html", function (err, data) {
				res.writeHead(404, {"Content-Type" : "text/html;charset=utf8"});
				res.end(data);
			})
			return;
		}
		
		var mineType = getMime(extname);
		res.writeHead(200, {"Content-Type" : mineType})
		res.end(data);
	});
	
	
}).listen(3000);


function getMime(extname) {
	switch(extname) {
		case ".html":
			return "text/html";
		case ".css":
			return "text/css";
		case ".js":
			return "text/javascript";
		case ".jpg":
			return "image/jpg";
	}
}