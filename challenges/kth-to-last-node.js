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

// find length of list
function findLength(node) {
  let listLength = 0;
  let current = node;

  while (current !== null) {
    listlength += 1;
    current = current.next;
  }

  return listLength;
}

function kthToLastNode(k, head) {
  let listLength = findLength(head);
  // calculate kth
  let kth = listLength - k + 1;

  if (kth > listLength) return undefined;

  // traverse list to return kth
  let current = head;
  let count = 0;

  while (current !== null) {
    count += 1;
    if (count === kth) return current.value;
    current = current.next;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
