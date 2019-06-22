
var http = require("http");
var formidable = require("formidable");
var util = require("util");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");


var server = http.createServer(function(req, res) {

	if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
 		//Creates a new incoming form.
        var form = new formidable.IncomingForm();

        form.uploadDir = "./uploads";
        form.keepExtensions = true; 
         //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function(err, fields, files) {
        	if (err) {
        		throw err;
        	}

        	console.log(fields);
        	console.log(files);
        	console.log(util.inspect({fields : fields , files: files}));

        	res.writeHead(200, {"content-type" : "text/plain"});

        	res.end("success");


        	var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
        	var ran = parseInt(Math.random() * 89999 + 10000);
        	var extname = path.extname(files.file2.name);


        	var oldpath = __dirname + "/" + files.file2.path;
        	var newPath = __dirname + "/uploads/" + ttt + ran + extname;


        	fs.rename(oldpath, newPath, function(err) {
        		if (err) {
        			throw Error("rename fail");
        		}

        		res.writeHead(200, {"content-type" : "text/plain"});
        		res.end("success");
        	});

        });
	} else if (req.url == '/') {
		fs.readFile("./static/testform.html", function(err, data) {
			res.writeHead(200, {"content-type" : "text/html"});
			res.end(data);
		});
	} else {
		res.writeHead(404, {"content-type": "text/html"});
		res.end("404");
	}

});

server.listen(3000, "127.0.0.1");

