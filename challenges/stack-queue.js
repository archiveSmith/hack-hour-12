/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
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
}

Queue.prototype.dequeue = function() {
  if (this.outStack.index === 0) {
    if (this.inStack.index === 0) return undefined;
    while (this.inStack.index > 0) {
      this.outStack.push(this.inStack.pop());
      console.log(this.instack.index);
    }
  }
  return this.outStack.pop();
}

module.exports = {Stack: Stack, Queue: Queue};

