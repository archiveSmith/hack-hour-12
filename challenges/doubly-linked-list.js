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
//

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let node = new Node(val);
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  }
  else if (this.head === this.tail) { 
    this.head.next = node;
    node.prev = this.head;
    this.tail = node;
  }
  else {
    //point current tails next at new node
    //point new nodes prev at tail
    //and then make tail the new node
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node; 
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  //we need to go through the linked list from the beginning
  //to find the node with the value
  //to remove it - we point the node prior's next to the node to remove's next
  //and also point the node to removes next 's previous to the node's prior
  let currNode = this.head;
  //edge check if head is val to remove
  //this.head to current heads.next
  //new heads prev to null;
  if(currNode.val === val){
    this.head = this.head.next
    this.head.prev = null;
    return;
  }
  while(currNode && currNode.val !== val){
    currNode = currNode.next;
  }
  if (!currNode) return; //if remove val not found
  //edge case for tail as thing to remove;
  //point tail to current tails prev;
  //new tails next to null;
  if (!currNode.next) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    return;
  }
  //now currnode.value === val;
  else {
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
  }
  
};

const list = new LinkedList();
let node = 1;
let node2 = 2;
let node3 = 3;
let node4 = 3;
list.add(node);
list.add(node2);
list.add(node3);
list.add(node4);
list.remove(3);
console.log(list);
module.exports = LinkedList;
