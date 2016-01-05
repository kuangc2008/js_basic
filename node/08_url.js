


var http = require("http");
var url = require("url");

function start(route) {
	function onRequenst(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved.");


		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World333333333");
		response.end();
	}

	http.createServer(onRequenst).listen(8888);
	console.log("server has started");
}

exports.start = start;

