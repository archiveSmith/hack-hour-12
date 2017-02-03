/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = [];
  this.max = -Infinity;
  this.len = 0;

  this.push = function (val) {
    this.storage[this.len] = val;
    if (val > this.max) this.max = val;
    this.len += 1;
    return this.len;
  };

  this.pop = function () {
    if (this.len > 0) {
      const result = this.storage[this.len - 1];
      this.len -= 1;
      return result;
    }
    return undefined;
  };

  this.getMax = function (val) {
    return (this.len > 0) ? this.max : undefined;
  };
}

// let s = new Stack();

// for (let i = 0; i < 10; i += 1) {
//   console.log('pushing: ', s.push(i));
// }


// for (let i = 0; i < 10; i += 1) {
//   console.log('getMax: ', s.getMax());
//   console.log('popping: ', s.pop());
// }


module.exports = Stack;