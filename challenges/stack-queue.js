/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.store = {};
    this.length = 0;
}

Stack.prototype.pop = function() {
  const poped = this.store[this.length - 1];
  delete this.store[this.length - 1];
  this.decrementLength();
  return poped;
};

Stack.prototype.push = function(value) {
  this.store[this.length] = value;
  this.incrementLength();
};

Stack.prototype.incrementLength = function() {
  this.length += 1;
};

Stack.prototype.decrementLength = function() {
  this.length -= 1;
};

/**
* Queue Class
*/
function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
    this.s1.push(value);
}

Queue.prototype.dequeue = function() {
  while (this.s1.length > 0) {
    this.s2.push(this.s1.pop());
  }
  const dequeued = this.s2.pop();
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
  }
  return dequeued;
}

module.exports = {Stack: Stack, Queue: Queue};
