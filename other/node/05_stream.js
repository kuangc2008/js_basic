


var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('04_EventEmitter.js');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("程序执行完毕");




var data2 = "kuangcheng, ni arg godd health";
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data2, 'UTF8');
writerStream.end();
writerStream.on('finish', function() {
	console.log("write end");
});
writerStream.on('error', function(err) {
	console.log(err.stack);
});
console.log('end');