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
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (arguments.length < 2) return;
  if (isNaN(k)) return;
  let currentNode = head;
  let count = 1;
  
  //Find the length of the linked list
  while (currentNode.next !== null) {
    count += 1;
    currentNode = currentNode.next;
  }

  //Check for edge cases
  if (count < k || k < 0) return;

  //Find how far from the head to traverse, reset the head
  let numJumps = count - k;
  currentNode = head;

  //Navigate to the node we want
  for (let i = 0; i < numJumps; i += 1) {
    currentNode = currentNode.next;
  }

  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
