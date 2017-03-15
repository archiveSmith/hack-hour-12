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

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
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
  let currNode = this.head;
  if (currNode.val === val) {
    this.head = currNode.next;
    if (!this.head) this.tail = null;
    else this.head.prev = null;
  }
  while (currNode && currNode.next) {
    if (currNode.val === val) currNode.prev.next = currNode.next;
    else currNode = currNode.next;
  }
  if (currNode.next.val === val) {
    currNode = this.tail.next;
    this.tail = currNode.prev;
    this.tail.next = null;
  }
};

module.exports = LinkedList;
