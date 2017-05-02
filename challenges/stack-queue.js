/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    this.stack[this.stack.length] = el;
    //console.log(this.stack);
    //    return this.stack;
  }

  pop() {
    let val = this.stack[this.stack.length - 1];
    this.stack.length--;
    return val;
  }
}

/**
 * Queue Class
 */

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  enqueu()


}

let stack = new Stack();


for (let i = 1; i <= 5; i++) {
  stack.push(i);
}

let queue = new Queue(stack.stack);

for (let i = 1; i <= 5; i++) {
  console.log(queue.unshift());
}

console.log(stack);

module.exports = {Stack: Stack, Queue: Queue};
