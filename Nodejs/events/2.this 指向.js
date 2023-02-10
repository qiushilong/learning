const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('event', function(a, b) {
    console.log(a, b, this, this === eventEmitter)
})

eventEmitter.on('event', (a, b) => {
    console.log(a, b, this, this === eventEmitter)
})

eventEmitter.emit('event', 1, 2)