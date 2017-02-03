/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
  this.max = null;
}

Stack.prototype.push = function(value) {
  if (this.index === 0) this.max = value;
  else if (value > this.max) this.max = value;
  this.storage[this.index] = value;
  this.index += 1;
  return this.index;
}

Stack.prototype.pop = function() {
  this.index -= 1;
  if (this.index === 0) this.max = null;
  if (this.storage[this.index] === this.max) {
    this.max = this.storage[0];
    for (let i = 1; i < this.index; i += 1) {
      if (this.storage[i] > this.max) this.max = this.storage[i];
    }
  }
  return this.storage[this.index];
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;