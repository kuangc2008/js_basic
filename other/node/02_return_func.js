var fs = require("fs");

// var data = fs.readFileSync('01_http.js');

// console.log(data.toString());
// console.log("程序执行结束");


fs.readFile('01_http.js', function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});	
console.log("程序执行结束");