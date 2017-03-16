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
  const newNode = new Node(val);
  // start the list if there isn't one
  if(!this.head) {
    this.head = this.tail = newNode;
    return;
  }

  // pop it on the end
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = this.head;
  // handle head case
  if(node.val === val) {
    node.next.prev = null;
    this.head = node.next;
    delete node;
    return;
  }

  // walk the list
  while(node) {
    if(node.val === val) {
      if(node.prev) node.prev.next = node.next;
      if(node.next) node.next.prev = node.prev;
      if(node === this.tail) {
        this.tail = node.prev;
        this.tail.next = null;
      }

      delete node;
      return;
    }

    node = node.next;
  }
};
const list = new LinkedList();
for (let i = 1; i < 4; i++) {
  list.add(i);
}

list.add(3);
list.add(2);

list.remove(2);
//console.log(list.head.val);
//console.log(list.head.next.val);

let node = list.head;
while(node) {
  console.log('l',node.val);
  node = node.next;
}
//console.log(list);
module.exports = LinkedList;
