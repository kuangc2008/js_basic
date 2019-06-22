

var ejs = require("ejs");

var string = "好高兴啊，lovde 有  <%= a %> 万年";

var data = {
	a : 6
};

var html = ejs.render(string , data);

console.log (html);



var fs = require("fs");
var http = require("http");


var server = http.createServer(function(req, res) {
	fs.readFile("./file/index.ejs", function (error, data) {
		var template = data.toString();

		console.log(template);

		var dictionary = {
			a : 6,
			news : [
				{"title" : "III", "count" : 10}	,
				{"title" : "Love ", "count" : 20}	,
				{"title" : "You", "count" : 30}	
			]
		}

		var html = ejs.render(template, dictionary);
		res.writeHead(200, {"content-type" : "text/html; charset=utf8"});
		res.end(html);
	});
});

server.listen(3000);