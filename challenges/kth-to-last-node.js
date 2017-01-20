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
  if (head === undefined) {
    return undefined;
  }
  let length = 0;
  let curr = head;
  while (curr.next !== null) {
    length += 1;
    curr = curr.next
  }
  length += 1;

  if (k > length || k === 0) return undefined;

  let loop = length - k; //3
  let count = 0;
  let currNode = head;
  while (count < loop) {
    count += 1;
    currNode = currNode.next;
  }

  return currNode.value;
}

function kthToLastNode(k, head) {
  if (k === undefined || k < 1 || !head) return;
  const nodes = [];

  function traverse(node) {
    nodes.push(node);
    if (node.next === null) return;
    traverse(node.next);
  }

  traverse(head);
  if (k > nodes.length) return;
  return nodes[nodes.length - k];
}

//  var a = new Node('A');
//  var b = new Node('B');
//  var c = new Node('C');
//  var d = new Node('D');
//  var e = new Node('E');
 
//  a.next = b;
//  b.next = c;
//  c.next = d;
//  d.next = e;

//  console.log(kthToLastNode(2, a));



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
