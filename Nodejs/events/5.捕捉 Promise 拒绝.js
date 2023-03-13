const EventEmitter = require('events')

const ee = new EventEmitter({ captureRejections: true });
ee.on('something', async (value) => {
  throw new Error('kaboom');
});

ee.emit('something')