exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404


function showIndex(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html;charset=UTF8"});
	res.end("index");
}

function showStudent(req, res) {

	var id = req.url.substr(9);
	res.writeHead(200, {"Content-Type" : "text/html;charset=UTF8"});
	res.end("student:" + id + "   " + req.url);
}

function show404(req, res) {
	res.writeHead(404, {"Content-Type" : "text/html;charset=UTF8"});
	res.end("student:" + id);
}