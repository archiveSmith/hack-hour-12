/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.len = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.len] = val;
  this.len += 1;
  return this.len;
};

Stack.prototype.pop = function() {
  const remove = this.storage[this.len - 1];
  delete this.storage[this.len - 1];
  this.len -= 1;
  return remove;
};

Stack.prototype.getMax = function() {
  if (this.len === 0) return undefined;
  let max = 0;
  for (let i = 0; i < this.len; i += 1) {
    if (max < this.storage[i]) {
      max = this.storage[i];
    }
  }
  return max;
};



module.exports = Stack;