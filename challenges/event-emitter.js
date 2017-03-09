'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.listeners = {}
}

EventEmitter.prototype.on = function(funcName, func) {
  if(funcName in this.listeners) {
    return this.listeners[funcName];
  }
  else {
    this.listeners[funcName] = func;
    return func;
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    this.on(funcName)(...args);
};

var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
  counter++;
  console.log('counter', counter);
}); // counter should be 0
instance.trigger('increment'); // counter should be 1
instance.trigger('increment'); // counter should be 2

instance.on('addx', function(x) {
  counter += x;
  console.log(`counter + ${x}: ${counter}`);
})

instance.trigger('addx',2);
instance.trigger('addx',3);

module.exports = EventEmitter;
