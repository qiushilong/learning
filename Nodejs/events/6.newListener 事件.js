// 当添加新的监听器时触发事件 'newListener'
const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('newListener', (event, listener) => {
    // if(event === 'event') {
    //     emitter.on('event', () => {
    //         console.log('B')
    //     })
    // }
    console.log('添加了一个新的监听')
})

emitter.on('event', () => {
    console.log('A')
})

emitter.on('event', () => {
    console.log('A2')
})

emitter.emit('event')