const EventEmitter = require('node:events')

const emitter = new EventEmitter()

let m = 0

emitter.once('add', () => {
    console.log(++m)
})

emitter.emit('add') // 1
emitter.emit('add') // 被忽略，监听器被调用一次后注销
emitter.emit('add') // 被忽略
