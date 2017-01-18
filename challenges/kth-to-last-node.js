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
  if (head == null) {
    return undefined;
  }
  let listLength = 0;
  let currNode = head;
  do {
    currNode = currNode.next;
    listLength += 1;
  } while (currNode);
  if (k > listLength) {
    return undefined;
  }
  currNode = head;
  for (let i = 0; i < listLength - k; i += 1) {
    currNode = currNode.next;
  }
  return currNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

  // var a = new Node('A');
  // var b = new Node('B');
  // var c = new Node('C');
  // var d = new Node('D');
  // var e = new Node('E');
 
  // a.next = b;
  // b.next = c;return
  // c.next = d;
  // d.next = e;
 
  // console.log(kthToLastNode(10,a));

function kthToLastNode(k, head) {
  const nodes = [];
  // let length = 0;

  function traverseAndStore(node) {
    // length += 1;
    nodes.push(node);
    console.log(nodes.length);
    if (node.next === null) return;
    traverseAndStore(node.next);
  }

  traverseAndStore(head);
  return nodes[nodes.length - k].value;

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
 
  console.log(kthToLastNode(2,a));


