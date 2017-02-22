/**
 * Create a stack.Then create a queue using two stacks.
 */

//first in last out
function Stack() {
  this.storage = {};
  this.length = 0;
}


/**
* Queue Class
*/

//first in first out
function Queue() {
  this.enqueue = new Stack();
  this.dequeue = new Stack();
}

Queue.prototype.push = function(arg) {

}

Queue.prototype.shift = function() {

}

module.exports = {Stack: Stack, Queue: Queue};
