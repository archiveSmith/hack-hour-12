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
  this.length = 0;
}

function kthToLastNode(k, head) {
  if (!head || k < 1) {
    return undefined;
  }

  let nodes = [];

  while (head) {
    nodes.push(head.value)
    head = head.next;
  }

  console.log(nodes[nodes.length - k]);
  return nodes[nodes.length - k]
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// var f = new Node('F');
// var g = new Node('G');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;


// kthToLastNode(2, a);

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
