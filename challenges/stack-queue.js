/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.length = 0;
}

Stack.prototype.add = function(value) {
    this.stack[this.length++] = value;
}

Stack.prototype.pop = function() {
    if(this.length === 0) return;
    const deleted = this.stack[this.length - 1];
    delete this.stack[--this.length];
    return deleted;
}


/**
* Queue Class
*/

// goes through the first stack first.. and then the second stack?
function Queue() {
    this.stackQueue = {};
    this.length = 0;
}

Queue.prototype.add = function(stack) {
    this.stackQueue[this.length++] = stack;
}

Queue.prototype.pop = function() {
    if(this.length === 0) return;
    let currentStack = this.stackQueue[0];
    if(currentStack.length === 0) {
        delete this.stackQueue[0];
        this.length--;
        return this.pop();
    }
    return currentStack.pop();
}

const stack = new Stack();
stack.add('hi');
stack.add('im');
stack.add('richard');

const queue = new Queue();
queue.add(stack);
console.log(queue);
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log(queue);

module.exports = {Stack: Stack, Queue: Queue};
