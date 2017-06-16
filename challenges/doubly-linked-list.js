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
  // If no head exists, new node is head and tail
  if (this.head === null) {
    return this.head = this.tail = new Node(val);
  }

  // Create new node after the tail
  const newNode = new Node(val);
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
  
  // Return the new node
  return newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // check head
  if (this.head === null) return;
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }

  let currNode = this.head.next;

  while (currNode.next) {
    if (currNode.val === val) {
      currNode.next.prev = currNode.prev;
      currNode.prev.next = currNode.next;
      return;
    }

    currNode = currNode.next;
  }

  // check last node
  if (currNode.val === val) {
    this.tail = currNode.prev;
    this.tail.next = null;
  }

  return;
};

module.exports = LinkedList;
