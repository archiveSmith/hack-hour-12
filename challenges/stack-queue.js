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
  return this.index;
}

Stack.prototype.pop = function() {
  if (this.index === 0) return undefined;
  const value = this.storage[this.index - 1];
  this.index -= 1;
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
  return val;
}

Queue.prototype.dequeue = function() {
  if (this.outbox.index === 0) {
    if (this.inbox.index === 0) return undefined;
    while (this.inbox.index > 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox[this.outbox.length - 1];
}

module.exports = {Stack: Stack, Queue: Queue};
