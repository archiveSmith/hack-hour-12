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
  this.index = 0;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (!head) {
    return;
  }

  head.index = 0;
  let lastIndex = 0;
  let node = head;
  let index = 0;

  console.log('node.index', node.index, 'node.value', node.value);
  while (node.next) {
    node = node.next;
    index += 1;
    node.index = index;
    lastIndex = index;
    console.log('node.index', node.index, 'node.value', node.value);
  }

  // console.log('lastIndex', lastIndex);

  let indexIWant = lastIndex + 1 - k;

  console.log('index i want', indexIWant);

  if (indexIWant === 0) {
    return head.value;
  }

  node = head;
  while (node.next) {
    node = node.next;
    if (node.index === indexIWant) {
      return node.value;
    }
    // console.log('new node.index', node.index, 'node.value', node.value);
  }

  return;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
 
module.exports = {Node: Node, kthToLastNode: kthToLastNode};