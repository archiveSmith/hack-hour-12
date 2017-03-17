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
  if (!this.head) {
    this.head = this.tail = node;
    return;
  }

  this.tail.next = node;
  [this.tail.next.prev, this.tail] = [this.tail, this.tail.next];

  return;
};

let linkedList = new LinkedList();
// let nodeA = new Node(6);
// let nodeB = new Node(5);
// let nodeC = new Node(7);
// let nodeD = new Node(10);

linkedList.add(6);
linkedList.add(5);
linkedList.add(10);
linkedList.add(8);

console.log(linkedList)
/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return;
  if (this.head === this.tail) {
    if (this.head.val === val) {
      const node = this.head;
      [this.head, this.tail] = [null, null];
      return node;
    }
  }

  if (this.head.val === val) {
    const node = this.head;
    [this.head, this.head.next.prev] = [this.head.next, null];
    return node;
  }

  let currNode = this.head.next;
  while (currNode) {
    if (currNode.val === val) {
      const node = currNode;
      if (currNode === this.tail) {
        [this.tail, currNode.prev.next] = [currNode.prev, null];
      } else {
        [currNode.prev.next, currNode.next.prev] = [currNode.next, currNode.prev];
      }

      return node;
    }

    currNode = currNode.next;
  }

  return 'No node matched the value';
};

linkedList.remove(5);
console.log(linkedList)

module.exports = LinkedList;
