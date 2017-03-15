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
  const node = new Node(val);
  if (!this.head) this.head = this.tail = node;
  else {
    const tail = this.tail;
    tail.next = node;
    node.prev = tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = this.head;
  while (node) {
    if (node.val === val) {
      if (node.prev) {
        node.prev.next = node.next;
        if (node.next) {
          node.next.prev = node.prev;
        }
      }
    }
    node = node.next;
  }
};

module.exports = LinkedList;
