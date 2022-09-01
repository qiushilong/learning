var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function () {
    console.log('监听器 listener1执行...');
}
//监听器2
var listener2 = function () {
    console.log('监听器 listener2执行...');
}

//绑定方法1
eventEmitter.addListener('connection', listener1);
//绑定方法2
eventEmitter.on('connection', listener2);

//获取指定事件的监听器个数
var listenerNum = eventEmitter.listenerCount('connection');
console.log(listenerNum + '个监听器监听连接事件');

//处理事件
eventEmitter.emit('connection');

//移除监听
eventEmitter.removeListener('connection', listener1);
console.log('监听1已经移除');

//获取指定事件的监听器个数
listenerNum = eventEmitter.listenerCount('connection');
console.log(listenerNum + '个监听器监听连接事件');

//处理事件
eventEmitter.emit('connection');