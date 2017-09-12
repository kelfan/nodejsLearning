var fs = require('fs')
var events = require('events')
var eventEmitter = new events.EventEmitter();
var rs = fs.createReadStream('./mynewfile2.txt')
rs.on('open',function() {
	console.log('the file is open')
})

// create an event handler 
var myeventhanlder = function() {
	console.log('there is something happened')
}

// 添加事件到handler 
eventEmitter.on('happen',myeventhanlder)

// 触发事件 
eventEmitter.emit('happen')