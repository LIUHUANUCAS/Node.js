var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log('connection successful...');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler)
eventEmitter.on('data_received',function(){
    console.log('data recveived successful...');
    eventEmitter.emit('end');
});

// eventEmitter.on('end',function(){
eventEmitter.once('end',function(){
    console.log('end event listening...');
});

eventEmitter.emit('connection');
eventEmitter.emit('connection');
// console.log('end...')

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");