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

Stack.prototype.unshift = function(val) {
  let i;
  for (i = this.index; i > 0; i -= 1) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = val;
  this.index += 1;
}

/**
* Queue Class
*/

function Queue() {
  let inStack = new Stack();
  let outStack = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.inStack.push();
}

Queue.prototype.dequeue = function() {
  while (this.inStack.index > 0) {
    this.outStack.push(this.inStack.pop);
  }
  this.outStack.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
