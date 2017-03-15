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
  if(!this.head) {
    this.head = this.tail = new Node(val);
  } else if (!this.head.next) {
    this.head.next = this.tail = new Node(val);
    this.tail.prev = this.head;
  } else {
    let temp = new Node(val);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    console.log('head match');
    this.head = this.head.next;
    this.head.prev = null;
  }

  let currNode = this.head;

  while (currNode.next) {
    if (currNode.next.val === val) {
      currNode.next = currNode.next.next;
      if (currNode.next) currNode.next.prev = currNode;
      return;
    }
    currNode = currNode.next;
  } return false;
};
let ll = new LinkedList();
ll.add(5);
ll.add(3);
ll.add(2);
console.log(ll);
ll.remove(5);
console.log(ll);
module.exports = LinkedList;
