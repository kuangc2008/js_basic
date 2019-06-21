
var http = require("http");
var formidable = require("formidable");
var util = require("util");


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
        });
	}

});

server.listen(3000, "127.0.0.1");

