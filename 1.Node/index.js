const   EventEmitter = require('events')
const myFirstEmitter = new EventEmitter()

myFirstEmitter.on('greet',(n)=>console.log(n))

myFirstEmitter.emit('greet','Bumrah')