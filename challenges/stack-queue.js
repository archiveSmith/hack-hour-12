/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.length = 0;
}
 
Stack.prototype.pop = function(){
   let result = this.stack[this.length - 1];
   delete this.stack[this.length - 1];
   this.length--;
   return result;
}
 
Stack.prototype.push = function(item){
   this.stack[this.length] = item;
   this.length++;
}
 
 Stack.prototype.size = function(){
   return this.stack.length;
}

/**
* Queue Class
*/


function Queue() {
    this.inbox = new Stack();
    this.queuebox = new Stack();
}

Queue.prototype.enqueue = function(item){
    this.inbox.push(item)
}

Queue.prototype.dequeue = function(){
    while (this.inbox.length !== 0) {
        this.queuebox.push(this.inbox.pop())
    }

    return this.queuebox.pop()
}

module.exports = {Stack: Stack, Queue: Queue};

// let stac = new Queue()
// stac.enqueue(1);
// stac.enqueue(2);
// stac.enqueue(2);
// stac.dequeue();

// console.log(stac)
