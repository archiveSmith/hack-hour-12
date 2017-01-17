/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
  var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
  kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let listLength = 0;
  let currNode = head;
  do {
    currNode = currNode.next;
    listLength += 1;
  } while (currNode);
  currNode = head;
  for (let i = 0; i < listLength - k; i += 1) {
    currNode = currNode.next;
  }
  return currNode;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

  var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
  console.log(kthToLastNode(10,a));