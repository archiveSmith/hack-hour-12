'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
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

}

EventEmitter.prototype.on = function(funcName, func) {
  this[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this[funcName](...args);
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//     counter++;
// }); // counter should be 0
// instance.on('decrement', function() {
//   counter--;
// })
// console.log(counter)
// instance.trigger('increment'); // counter should be 1
// console.log(counter);
// instance.trigger('increment'); // counter should be 2
// console.log(counter)
// instance.trigger('increment'); // should be 3
// console.log(counter);
// instance.trigger('decrement'); // should be 2
// console.log(counter);
 
module.exports = EventEmitter;
