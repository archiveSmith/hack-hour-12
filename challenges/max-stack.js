/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(val) {
  this.value = val;
  this.next = null;

  this.tail = this;
  this.max = null;

  this.push = function (val) {
    this.tail.next = {
      value: val,
      next: null
    }

    this.tail = this.tail.next;

    if (val > this.max) this.max = val;
  }

  this.pop = function () {
    const output = this.tail;
    this.tail = null;

    this.max = this.value;
    currNode = this;
    
    while (currNode) {
      if (currNode.value > this.max) this.max = currNode.value;
      currNode = currNode.next;
    }

    return output;
  }

  this.getMax = function () {
    return this.max;
  }
}

module.exports = Stack;