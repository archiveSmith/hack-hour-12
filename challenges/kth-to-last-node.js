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

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
//
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

function kthToLastNode(k, head) {
  let counter = 1;
  let curr = head;
  while (curr.next) {
    counter++;
    curr = curr.next;
  }
  let goUntil = counter - k;

  counter = 0;
  curr = head;
  while (counter++ < goUntil) {
    curr = curr.next;
  }

  // console.log(curr);

  return curr.value;

}

// console.log(kthToLastNode(5, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
