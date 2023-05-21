const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// eventEmitter 公开了 on 和 emit 方法

// on 用来监听事件
eventEmitter.on('start', () => {
    console.log('开始')
})

// emit 用来触发事件
eventEmitter.emit('start');

// 携带参数
eventEmitter.on('start2.0', (start, end) => {
    console.log(`从${start}到${end}`)
})

eventEmitter.emit('start2.0', 1, 10)

/**
 * eventEmitter 对象还有其他几个交互方法
 * once(): 添加单次监听器。
 * removeListener() / off(): 从事件中移除事件监听器。
 * removeAllListeners(): 移除事件的所有监听器。
 */