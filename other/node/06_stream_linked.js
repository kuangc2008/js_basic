var fs = require("fs");
var zlib = require('zlib');


fs.createReadStream('01_http.js')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');