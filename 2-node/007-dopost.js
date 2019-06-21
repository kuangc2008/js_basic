var http = require("http");
var queryString = require("querystring");

var server = http.createServer(function(req, res) {


	if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
		var alldata = "";

		req.addListener("data" , function(chunk) {
			console.log("data:" + chunk);
			alldata += chunk;
		});

		req.addListener("end", function() {

			var dataString = alldata.toString();
			var dataObj = queryString.parse(dataString);



			res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"})
			res.end(req.url + "  chunk:" + alldata
				+ " \n" + "  mingzi->" + dataObj.mingzi);
		});
	}






});

server.listen(3000);