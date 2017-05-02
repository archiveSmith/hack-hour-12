
/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...

  this.stack = [];
  
  this.push = (ele) => {
      this.stack[this.stack.length] = ele;
      return this.stack.length;
  }
  
  this.pop = (ele) => {
      const popped = this.stack[this.stack.length - 1];
      this.stack.splice(this.stack.length - 1, 1);
      return popped;
  }
  
  this.getMax = () => {
      return this.stack.reduce(( a, b ) => {
          return b > a ? b : a;
      }, -Infinity)
  }
  
}


module.exports = Stack;