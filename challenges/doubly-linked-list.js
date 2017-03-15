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
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // Check if the first node has the value
  let currNode = this.head;
  if (currNode.val === val) {
    this.head = currNode.next;
    this.head.prev = null;
  }
  while (currNode.val !== val) {
    currNode = currNode.next;
  }
  currNode = currNode.prev;
  currNode.next = currNode.next.next;
};

module.exports = LinkedList;
