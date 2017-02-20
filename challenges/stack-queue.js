/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.length++] = value;
  return this.length;
};

Stack.prototype.pop = function() {
  if (!this.length) return;
  const result = this.storage[--this.length];
  delete this.storage[this.length];
  return result;
};


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  return this.stack1.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.stack2.length) return this.stack2.pop();

  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  
  return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
