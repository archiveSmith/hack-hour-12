/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    this.storage = {};
    this.index = 0;
    this.sorted = [];
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.sorted.push(value);
    this.sorted.sort((l,h) => l - h);
    this.index++;
    return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
    let lastIndex = Object.keys(this.storage).length - 1;
    let lastValue = this.storage[lastIndex];
    this.sorted.splice(this.sorted.indexOf(lastValue),1);
    delete this.storage[lastIndex];
    return lastValue;
};

Stack.prototype.getMax = function() {
    return this.sorted[this.sorted.length - 1];
}

Stack.prototype.print = function() {
    for (key in this.storage) {
        console.log(key," => ", this.storage[key]);
        console.log(this.sorted);
    }
}

const stck = new Stack();

stck.push('1');
stck.push('3');
console.log("len",stck.push('5'));
stck.push('2');
stck.pop();
stck.pop();
console.log("max",stck.getMax());
stck.print();

module.exports = Stack;