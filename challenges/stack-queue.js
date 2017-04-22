/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.length = 0;
}

Stack.prototype.push = function(value) {
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
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
    this.stack1.push(value);
}

Queue.prototype.dequeue = function() {
    if(this.stack2.length === 0) {
        while(this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    if(this.stack2.length !== 0) return this.stack2.pop();
    else return;
}

module.exports = {Stack: Stack, Queue: Queue};
