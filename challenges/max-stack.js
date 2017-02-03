/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const storage = [];
  let max = -infinity;
  let len = 0;

  this.push = function (val) {
    storage[this.len] = val;
    if (val > max) max = val;
    this.len += 1;
    return this.len;
  };

  this.pop = function () {
    if (this.len > 0) {
      const result = storage[this.len - 1];
      this.len -= 1;
      return result;
    }
    return undefined;
  };

  this.getMax = function (val) {
    return this.max;
  };
}

module.exports = Stack;