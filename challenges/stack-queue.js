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

  // this.getSize = () => {
  //   return this.size;
  // }
}


/**
* Queue Class
*/


function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
  this.size = 0;

  this.enqueue = (val) => {
    this.s1.push(val);
    this.size += 1;
  };

  this.dequeue = () => {
    if (this.size === 0) return;

    for (let i = 0; i < this.size; i += 1) {
      this.s2.push(this.s1.pop());
    }
    // console.log('transferred queue: ', this.s2.storage);
    const result = this.s2.pop();
    this.size -= 1;
    for (let i = 0; i < this.size; i += 1) {
      this.s1.push(this.s2.pop());
    }
    // console.log('transferred back queue: ', this.s1.storage);
    return result;
  };

  // this.getSize = () => {
  //   return this.size;
  // };
}

// let q = new Queue();
// for (let i = 0; i < 10; i += 1) {
//   console.log('enqueue: ', i * 10);
//   q.enqueue(i * 10);
//   console.log('length: ', q.getSize());
// }
// for (let i = 0; i < 12; i += 1) {
//   console.log('dequeue: ', q.dequeue());
// }

module.exports = {Stack: Stack, Queue: Queue};
