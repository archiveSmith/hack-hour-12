/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if(!this.head) return this.head = this.tail = new Node(val);
  let current = this.head;
  let previous;
  while(current !== null) {
    previous = current;
    current = current.next;
  }
  previous.next = new Node(val);
  previous.next.prev = previous;
  this.tail = previous.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  let previous;
  while(current !== null) {
    previous = current;
    if(current.val === val) {
      if(current === this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      }
      if(current === this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }
    current = current.next;
  }
};

module.exports = LinkedList;
