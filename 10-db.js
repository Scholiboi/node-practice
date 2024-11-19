const EventEmitter = require('events')

const myEmitter = new EventEmitter()

myEmitter.on('response', (username, userId) => {
  console.log(`Data received from ${username} with ID: ${userId}`)
})

myEmitter.on('response', () => {
  console.log('Perform some actions here')
})

myEmitter.emit('response', 'john', 123)