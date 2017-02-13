/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index += 1;
}

Stack.prototype.pop = function() {
  if (this.index === 0) return undefined;
  const value = this.storage[this.index];
  if (this.index > 0) this.index -= 1;
  return value;
}

/**
* Queue Class
*/

function Queue() {
  let inStack = new Stack();
  let outStack = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.inStack.push(val);
}

Queue.prototype.dequeue = function() {
  let i;
  for (i = this.inStack.length; i >= 0; i -=1) {
    this.outStack.push(this.inStack[i]);
  }
  this.outStack.pop();
  this.outStack = new Stack();
}

module.exports = {Stack: Stack, Queue: Queue};
