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
  // are we adding the head?
  if (!this.head) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  let newNode = new Node(val);
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // go through the list and look for val
  let currNode = this.head;
  while (currNode) {
    // if we have a match
    if (currNode.val === val) {
      // if the match is the head
      if (currNode === this.head) {
        currNode.next.prev = null;
        this.head = currNode.next;
      }
      // if the match is the tail
      else if (currNode === this.tail) {
        currNode.prev.next = null;
        this.tail = currNode.prev;
      }
      else {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
      }
      return;
    }
    currNode = currNode.next;
  }
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
