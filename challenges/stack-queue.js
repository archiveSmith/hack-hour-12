/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.contents = [];

    this.push = (elem) => {
        this.contents.push(elem);
    }
    this.pop = () => {
        return this.contents.pop()
    }
}


/**
* Queue Class
*/


function Queue() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();

    this.push = (elem) => {
        while (this.stackOne.contents.length) {
            this.stackTwo.push(this.stackOne.pop());
        } this.stackOne.push(elem);
        while (this.stackTwo.contents.length) {
            this.stackOne.push(this.stackTwo.pop());
        }
    }
    this.unshift = () => {
        return this.stackOne.pop();
    }
}

module.exports = {Stack: Stack, Queue: Queue};
