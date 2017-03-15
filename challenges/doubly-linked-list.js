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
  if (this.head === null) {
    return this.head = this.tail = new Node(val);
  }

  const newNode = new Node(val);
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;

  while (currNode) {
    if (currNode.val === val) {
      currNode.next.prev = currNode.prev;
      currNode.prev.next = currNode.next;
      return;
    }

    currNode = currNode.next;
  }

  return;
};

module.exports = LinkedList;
