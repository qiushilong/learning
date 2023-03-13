// 当 EventEmitter 实例中发生错误时，典型的操作是触发 'error' 事件
const { EventEmitter, errorMonitor} = require('node:events')

const emitter = new EventEmitter();

emitter.on('error', (err) => {
    console.error('whoops! there was an error');
})

emitter.emit('error', new Error('whoops!'))

// errorMonitor 可以不消费 error，并进行监视
const _emitter = new EventEmitter();

_emitter.on(errorMonitor, (err) => {
    
})

_emitter.emit('error', new Error('whoops!'))