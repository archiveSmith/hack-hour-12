/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stac = new Array();
  this.len = 0;
  this.max = -Infinity;
  // this.previousMax = -Infinity
  this.push = function(item) {
    if (item >= this.max) {
      this.max = item;
    }

    this.stac[this.len] = item;
    this.len+= 1;
    return this.len;
  }

  this.pop = function() {
    let result = this.stac[this.len];
    this.stac = this.stac.slice(0, this.len - 1);
    this.len-= 1;

    this.max = this.stac.reduce( function(acu, ele) {
          return Math.max(acu,ele)
        })

    return result;
  }

  this.getMax = function(){
    return this.max;
  }
}

// arr = new Stack()
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(3);
// arr.push(5);
// arr.push(6);
// arr.push(7);
// console.log(arr.stac)
// console.log(arr.getMax())
// arr.pop();
// arr.pop();

// console.log(arr.stac)
// console.log(arr.getMax())
module.exports = Stack;