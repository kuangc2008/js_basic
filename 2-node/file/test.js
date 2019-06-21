
require("./msg.js");

console.log("I am test file");


var info = "info str";

var msg = "msg str";

function showInfo() {
	console.log(info);
}


exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;



