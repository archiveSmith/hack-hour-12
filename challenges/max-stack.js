/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.max = -Infinity;
  this.length = 0;
}

Stack.prototype.push = function(element) {
  this.length += 1;
  if (element > this.max) {
    this.max = element;
  }

  return this.storage.unshift(element);
};

Stack.prototype.pop = function() {
  // Store popped value
  const output = this.storage.shift();
  
  if (output === this.max) {
    this.max = this.storage.slice().sort((a, b) => b - a)[0];
  }

  // Return popped value
  return output;
};

Stack.prototype.getMax = function() {
  return this.max;
};

module.exports = Stack;
