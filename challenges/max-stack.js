/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.max;
  this.storage = [];
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length += 1;
  if (val > this.max) this.max = val;
  return this.length;
}

Stack.prototype.pop = function() {
  let pop = this.storage.splice(this.length - 1);
  this.length -= 1;
  if (pop[0] === this.max) this.max;
  return pop[0];
}

Stack.prototype.getMax = function() {
  if (this.length === 0) return;
  if (this.max) return this.max;
  return this.storage.reduce((acc, cv) => {
    return cv > acc ? cv : acc;
  })
}

let newStack = new Stack();
newStack.push(3)
newStack.push(4)
newStack.push(7)
newStack.push(10)
newStack.push(10)
newStack.pop();
console.log(newStack.getMax())

module.exports = Stack;