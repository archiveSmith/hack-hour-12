/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(callback) {
    //  [    ]
    //  [    ]
    //  [    ]
    //  [    ]
    // this.context = null;
    // this.next = null;
    // this.head = null;

    // addToStack: function(callback) {
    //     this.context = callback;
    //     this.tail = this;
    // }

    // prototypal inheritance
    // inbox/outbox

    this.storage = [];
    this.index = 0;

}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index++;
    return value;
}

Stack.prototype.pop = funtion() {



}


/**
* Queue Class
*/


function Queue(stackObj) {
//  o   o   o
// /\  /\  /\
// ||  ||  ||

// while (stackObj.length === 0 && queue.length > 0) {
//     let callback = queue[0];
//     queue.shift();
//     callback();
// }

this.inbox = new Stack();
this.outbox = new Stack();

}

Queue.prototype.enqueue = function () {
    
}

module.exports = {Stack: Stack, Queue: Queue};
