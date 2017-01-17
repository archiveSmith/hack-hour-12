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

function kthToLastNode(k, head) {
  let nodeLength = 1;
  let nodeSpot = 0;
  let currentNode = head;

  // get length of list
  while (currentNode.next !== null) {
    nodeLength += 1;
    currentNode = currentNode.next;
  }

  // reset node finder location
  currentNode = head;

  // iterate through list until desired node
  while (nodeSpot < nodeLength - k) {
    nodeSpot += 1;
    currentNode = currentNode.next;
  }

  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
