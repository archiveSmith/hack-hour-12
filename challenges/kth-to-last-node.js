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

function kthToLastNode(k, head) {
  let nodes = [];
  let count = 0;
  while (head) {
    count++
    nodes.push(head);
    head = head.next;
  }

  if (nodes[count - k].value) return nodes[count - k].value;
  else return;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// if (k === undefined || k < 1 || !head) return;
// const nodes = [];
// // find length and store each in array
// function traverseAndStore(node) {
//   nodes.push(node);
//   if (node.next === null) return;
//   traverseAndStoreAndCount(node.next);
// }
//
// traverseAndStore(head);
// if (k > nodes.length) return;
// return nodes[nodes.length - k];
