var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	
	
	if (pathname == '/' && query == null) {
		pathname = "index.html";
	}
	
	console.log(pathname);
	
	
	
	var pathr = "./static/webdemo/" + path.normalize(pathname);
	
	
	// 后缀名
	var extname = path.extname(pathname);	
	
	fs.readFile(pathr, function(err, data) {
		if (err) {
			fs.readFile("./static/404.html", function (err, data) {
				res.writeHead(404, {"Content-Type" : "text/html;charset=utf8"});
				res.end(data);
			})
			return;
		}
		
		getMime(extname, function(mime) {
			res.writeHead(200, {"Content-Type" : mime})
			res.end(data);		
		});
		
	});
	
	
}).listen(3000);


function getMime(extname, callback) {
	fs.readFile("./file/mime.json", function(err, data){
		if (err) {
			throw Error("can't find mime.json file!");
		}
		var mimeJSON = JSON.parse(data);
		var mime = mimeJSON[extname] || "text/plain";
		callback( mime );
	});
}