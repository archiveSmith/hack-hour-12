/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack(array) {
   this.array = array || [];

   this.push = (value) => {
     this.array[this.array.length] = value;
     return this.array.length;
   };

   this.pop = () => +this.array.splice(this.array.length - 1);


   this.getMax = () => this.array.length > 0 ? Math.max(...this.array) : undefined;
 }

 module.exports = Stack;
