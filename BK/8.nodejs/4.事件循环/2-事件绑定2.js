//对于每个事件,EventEmitter支持若干个事件监听器
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', '参数1', '参数2');