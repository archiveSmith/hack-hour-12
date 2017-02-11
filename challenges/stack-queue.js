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
  delete this.storage[this.length]
  return result;
};


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  if (this.stack2.length === 0) return this.stack2.push(value);

  let curr = this.stack2.pop();
  while (curr !== undefined) {
    this.stack1.push(curr);
    curr = this.stack2.pop();
  }
  this.stack2.push(value);

  curr = this.stack1.pop();
  while (curr !== undefined) {
    this.stack2.push(curr);
    curr = this.stack1.pop();
  }

  return this.stack2.length;
};

Queue.prototype.dequeue = function() {
  return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
