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
  if (!head || k < 1) return undefined;
  const nodes = [];

  while (head !== null) {
    nodes.push(head.value);
    head = head.next;
  }

  return nodes[nodes.length - k];
}


// let node = new Node('a');
// let node2 = new Node('b');
// let node3 = new Node('c');
// let node4 = new Node('d');
// let node5 = new Node('e');

// node.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log(kthToLastNode(3, node));
// console.log(node);




module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};


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