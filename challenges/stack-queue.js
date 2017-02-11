/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.contents = {};
  this.len = 0;
}

Stack.prototype.push = function (val) {
  this.contents[this.len] = val;
  this.len += 1;
};

Stack.prototype.pop = function () {
  const remove = this.contents[this.len - 1];
  delete this.contents[this.len - 1];
  this.len -= 1;
  return remove;
};



/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.in.push(val);
};

Queue.prototype.dequeue = function () {
  if (this.out.len === 0) {
    while (this.in.len > 0) {
      const remove = this.in.pop();
      this.out.push(remove);
    }
    if (this.out.len === 0) return undefined;
  }
  return this.out.pop();
};


module.exports = {Stack: Stack, Queue: Queue};
