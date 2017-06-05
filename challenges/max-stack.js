/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   this.stack = [];
//   this.length = 0;
// }

// Stack.prototype.pop = function() {
//   let popped = this.stack[--this.length];
//   this.stack = this.stack.slice(0, this.length);
//   return popped;
// }

// Stack.prototype.push = function(value) {
//   this.stack[this.length++] = value;
//   return this.length;
// }

// Stack.prototype.getMax = function() {
//   if(this.stack.length === 0) {
//     return;
//   }
//   return this.stack.reduce((a, b) => {
//     return Math.max(a, b);
//   })
// }

// LIFO
function Stack() {
  this.stack = {};
  this.length = 0;
  this.max;
}

Stack.prototype.push = function(value) {
  this.stack[this.length++] = value;
  if(!this.max) this.max = value;
  if(this.max < value) this.max = value;
}

Stack.prototype.getMax = function() {
  return this.max;
}

Stack.prototype.pop = function() {
  let popped = this.stack[--this.length];
  delete this.stack[this.length];
  if(popped === this.max) {
    this.max = this.generateNewMax();
  }
  return popped;
}

Stack.prototype.generateNewMax = function() {
  const keys = Object.keys(this.stack);
  if(this.length === 0) return;
  let temp = this.stack[0];
  for(let i = 1; i < keys.length; i++) {
    if(temp < this.stack[i]) {
      temp = this.stack[i];
    }
  }
  return temp;
}

module.exports = Stack;