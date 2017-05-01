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


// Set listeners and functions properties on the constructor
// With the 'on' method, add funcName and func to relevant arrays
// With trigger, loop through listeners to find match/es for funcName
// call appropriate function that matches listener
// Check for additional arguments and pass any to listeners array

function EventEmitter() {
  this.listeners = [];
  this.functions = []; 
}

EventEmitter.prototype.on = function(funcName, func) {
   this.listeners.push(funcName);
   this.functions.push(func);
};

EventEmitter.prototype.trigger = function(funcName) {
  this.listeners.forEach((el, idx) => {
    if (el === funcName) this.functions[idx]();
  });
  let args = [...arguments];
  for (let i = 1; i < args.length; i += 1) {
    this.listeners.push(args[i]);
  }
};

var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
   counter++;
 });
 instance.trigger('increment');
 instance.trigger('increment');
 console.log(counter);

module.exports = EventEmitter;




















// this.listeners = [];
// this.functions = [];

// this.listeners.push(funcName);
// this.functions.push(func); 

// this.listeners.forEach((el, i) => {
//   if (el === funcName) this.functions[i]();
// });
// let args = [...arguments];
// for (let i = 1; i < args.length; i++) {
//   this.listeners.push(args[i]);
// }