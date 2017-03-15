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
 if (!this.head) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
   return;
 }
 let currNode = this.head;
 while (currNode.next) {
   currNode = currNode.next;
 }
 let newNode = new Node(val);
 currNode.next = newNode;
 newNode.prev = currNode;
 this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // are there nodes in the list?
  if (!this.head) return;
  // are we removing the head?
  if (this.head.val === val && !this.head.next) {
    // are there no other nodes?
    this.head = this.tail = null;
  } else if (this.head.val === val && this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  // go through the list and look for val
  let currNode = this.head;
  while (currNode.next && currNode.val !== val) {
    currNode = currNode.next;
  }
  // if we're not at the end of the list
  if (currNode.val === val && currNode.next) {
    currNode.next.prev = currNode.prev;
    currNode.prev.next = currNode.next;
    return;
  }
  // if we are at the tail
  else if (currNode.val === val && !currNode.next) {
    currNode.prev.next = null;
    this.tail = currNode.prev;
    return;
  }
  return;
};

// const ll = new LinkedList();
// const  n = 10;
// for (let i = 0; i < n; i += 1) {
//   ll.add(i * 10);
//   // console.log((ll));
// }

// for (let i = n; i > 0; i -= 1) {
//   ll.remove(i * 10);
//   console.log((ll));
// }

module.exports = LinkedList;
