/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.size = 0;

  this.push = (val) => {
    this.storage[this.size] = val;
    this.size += 1;
    return this.size;
  }

  this.pop = () => {
    if (this.size === 0) return;

    const result = this.storage[this.size - 1];
    this.storage[this.size - 1] = undefined;
    this.size -= 1;
    return result;
  }

  this.isEmpty = () => {
    return this.size <= 0;
  }
}


/**
* Queue Class
*/

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
  this.size = 0;

  this.enqueue = (val) => {
    this.in.push(val);
    this.size += 1;
  };

  this.dequeue = () => {
    // check if the out stack has elements
    if (this.out.isEmpty()) {
      // if not, fill it with the in stack
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
      }
    }
    // pop of the out stack
    return this.out.pop();
  }
}

// let q = new Queue();
// for (let i = 0; i < 10; i += 1) {
//   console.log('enqueue: ', i * 10);
//   q.enqueue(i * 10);
// }
// for (let i = 0; i < 12; i += 1) {
//   console.log('dequeue: ', q.dequeue());
// }

module.exports = {Stack: Stack, Queue: Queue};
