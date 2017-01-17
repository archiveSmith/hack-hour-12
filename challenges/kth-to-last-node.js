/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function List() {
  this.head = null;
}

List.prototype.add = function(val) {
  let node = new Node(String.fromCharCode(val));
  let currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    return node;
}

let list = new List();


for (let i = 65; i < 70; i++) {
  list.add(i);
}

function kthToLastNode(k, head) {
  let node = head;
  let count = 0;
  let values = {};
  while (node) {
    console.log(node);
    values[count++] = node.value;
    node = node.next;
  }

  if( values[count - k ] ) {
    return values[count - k];
  }
  else {
    return k + " out of range";
  }

}

console.log(kthToLastNode(10,list.head));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
