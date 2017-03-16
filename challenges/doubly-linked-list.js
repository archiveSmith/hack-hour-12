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
  if (this.head === null) {
    this.head = node;
    // this.tail = this.head;
  } else {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = currentNode.next;
    console.log('currentNode', currentNode)
    console.log('tail', this.tail)
    // currentNode.next.prev = currentNode;
    this.tail.prev = currentNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

let dll = new LinkedList();
dll.add(1);
dll.add(2);
dll.add(3);
dll.add(4);
// console.log(JSON.stringify(dll))


module.exports = LinkedList;
