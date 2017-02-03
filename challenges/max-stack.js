/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(val) {
  this.storage.push(val);
  return this.storage.length;
};

Stack.prototype.pop = function() {
  return this.storage.pop();
};

Stack.prototype.getMax = function() {
  return Math.max(...this.storage);
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(JSON.stringify(myStack));

module.exports = Stack;