/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.values = {};
  this.max = {};
  this.length = 0;
  this.push = function(value) {
    if (!this.max || this.max < value) this.max = value;
    this.values[this.length] = value;
    this.length++;
    return this.length;
  }
  this.pop = function(){
    this.length--;
    let popped = this.values[this.length];
    delete this.values[this.length];
    return popped;
  }
  this.getMax = function() {

    return this.max;
  }
}
const testStack = new Stack();
console.log(testStack.push(3));
console.log(testStack.push(8));
console.log(testStack.pop());
console.log(testStack.push(10));
console.log(testStack.getMax());



module.exports = Stack;