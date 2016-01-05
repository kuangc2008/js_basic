

var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on("some_event", function(arg1, arg2) {
	console.log('some_event事件被触发' ,arg1 , arg2);
});

setTimeout(function() {
	event.emit('some_event', 'arg1', 'arg2');
}, 1000);