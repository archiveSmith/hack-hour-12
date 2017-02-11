/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(array) {
  this.array = array || [];

  this.push = (value) => {
    if (!array.length) return;
    this.array[this.array.length] = value;
    return this.array.length;
  };

  this.pop = () => this.array.splice(this.array.length - 1);
}


/**
* Queue Class
*/


function Queue(array) {
  this.array = array || [];

  this.enqueue = (value) => {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      array[i] = array[i + 1];
    }
    array[0] = value;
    return this.array.length;
  };

  this.dequeue = () => this.array.splice(this.array.length - 1);
}

module.exports = {Stack: Stack, Queue: Queue};
