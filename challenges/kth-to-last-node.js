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
  if (k === undefined || k < 1 || !head) return undefined;

  const nodes = [];

  // find length of list
  function traverseList(node) {
    nodes.push(node.value);
    if (node.next === null) return;
    traverseList(node.next);
  }

  traverseList(head);
  if (k > nodes.length) return;

  return nodes[nodes.length - k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
