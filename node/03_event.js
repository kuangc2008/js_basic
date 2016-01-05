var events = require('events');

var eventEmitter = new events.EventEmitter();


var connectHandler = function conncted() {
	console.log('连接成功');

	eventEmitter.emit('data_receiverd');
}

eventEmitter.on('connection', connectHandler);


eventEmitter.on('data_receiverd', function() {
	console.log('数据接收成功');
});

eventEmitter.emit('connection');

console.log('程序完毕');